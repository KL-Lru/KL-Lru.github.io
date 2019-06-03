#include <cmath>
#include <vector>
#include <iostream>
#define INF (1<<30)
using namespace std;

vector<int> seg_tree;
int N;

void init(vector<int> &v){
  int n = v.size();
  N = pow(2, ceil(log2(n))); 
  seg_tree.resize(2*N-1);

  for(int i=0;i<N;i++) seg_tree[N-1+i] = (i>=n?INF:v[i]);
  for(int i=N-2;i>=0;i--) seg_tree[i] = min(seg_tree[2*i+1], seg_tree[2*i+2]);
}

void update(int ind, int val){
  ind += N - 1;
  seg_tree[ind] = val;
  while(ind > 0){
    ind = (ind - 1) / 2;
    seg_tree[ind] = min(seg_tree[2*ind+1], seg_tree[2*ind+2]);
  }
}
int query(int a, int b, int ind, int l, int r){
  if(r < a || b < l) return INF;
  if(a <= l && r <= b) return seg_tree[ind];
  else return min(query(a, b, 2*ind+1, l, (l+r)/2), 
                  query(a, b, 2*ind+2, (l+r)/2+1, r));
}
