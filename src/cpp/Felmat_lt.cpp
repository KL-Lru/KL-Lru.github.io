#define ll long long
ll mod_inverse(ll a, ll p){
  ll x = 1, n = p - 2;
  while(n != 0){
    if(n%2 == 1){ 
      x = (x * a) % p;
      n -= 1;
    }else{
      x = (x * x) % p;
      n /= 2;
    }        
  }
  return x;
}
