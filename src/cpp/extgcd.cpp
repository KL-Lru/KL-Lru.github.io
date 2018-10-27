#define ll long long
#define MOD 1000000007
ll ext_gcd(ll a, ll b, ll& x, ll& y){
  ll gcd = a;
  if(b != 0){
    gcd = ext_gcd(b, a % b, y, x);
    y = (y - (a / b) * x) % MOD; // モジュラ逆数じゃなくて方程式計算の時は%MODは不要
  } else {
    x = 1;
    y = 0;
  }
  return gcd;
}
/* xの計算結果は負になることもあるので, モジュラ逆数として使うときは正にする */
ll posi_modular_inverse(ll a, ll b, ll& x, ll& y){
  ll gcd = ext_gcd(a, b, x, y);
  x = (x + MOD) % MOD;
  return gcd;
}
