import numpy as np
from tqdm import tqdm
import matplotlib.pyplot as plt 
import matplotlib.cm as cm

N = 1000

def sgn(x):
    return 1 if x else -1
# 正解はy - x - 3(y = x + 3)
# バイアスw[0]とxに対する重みw[1], yに対する重みw[2]
def truejudge(x, y):
    return y > x + 3

def estjudge(x, y, w):
    return y > (w[0] + x * w[1])/(-w[2])

def truecurve(x):
    return x + 3

def estcurve(x, w):
    return (w[0] + x * w[1])/(-w[2])

x = np.random.normal(0,10,N)
y = np.random.normal(0,10,N)
w = np.random.normal(0,1,3)


# クラスに入るものと入らないものを分けて描画
label = truejudge(x,y)
posx = []
posy = []
negx = []
negy = []
for i, flag in enumerate(label):
    if flag:
        posx.append(x[i])
        posy.append(y[i])
    else:
        negx.append(x[i])
        negy.append(y[i])

pos = np.array([posx,posy])
neg = np.array([negx,negy])
plt.scatter(pos[0,:],pos[1,:],s=10,c='white',edgecolor='red',label='Class C')
plt.scatter(neg[0,:],neg[1,:],s=10,c='white',edgecolor='blue',label='Other Class')

# 正解の境界線の描画
xx = np.linspace(-30,30)
line = truecurve(xx)
plt.plot(xx,line,color='#ff00ff',linewidth=1)


# 学習させていく…
lr = 0.01

estline = estcurve(xx, w)
plt.plot(xx,estline,color='#00ff00',linewidth=1)
for bt in tqdm(range(1000)):
    flag = True
    for i in range(N):
        if truejudge(x[i],y[i]) != estjudge(x[i],y[i],w):
            flag = False
            w[0] = w[0] + lr * sgn(truejudge(x[i], y[i]))
            w[1] = w[1] + lr * x[i] * sgn(truejudge(x[i], y[i]))
            w[2] = w[2] + lr * y[i] * sgn(truejudge(x[i], y[i]))
    if flag:
        print('Learning Complete!')
        break
    if bt == 500:
        estline = estcurve(xx, w)
        plt.plot(xx,estline,color=('#00ff88'),linewidth=1)
w/=w[2]
estline = estcurve(xx, w)
plt.plot(xx,estline,color=('#00ffff'),linewidth=1)

# 描画設定
plt.xlim([-30,30])
plt.ylim([-30,30])
plt.legend()
plt.show()
print(w)