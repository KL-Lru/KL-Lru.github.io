#define MAX_N 100
int par[MAX_N], rank[MAX_N];

/* 初期化 */
void init(int n){
  for(int i=0;i<n;i++){
    par[i]=i;
    rank[i]=0;
  }
}

/* 根ノード探索 */
int find(int x){
  if(par[x] == x) return x;
  else{
    /* path compression */
    par[x] = find(par[x]);
    return par[x];
  }
}

/* 併合 */
void unite(int x, int y){
  int px = find(x), py = find(y);
  if(px == py) return;
  /* union by rank */
  if(rank[px] > rank[py]) par[px] = py;
  else par[py] = px;
  if(rank[px] == rank[py]) rank[x]++;
}