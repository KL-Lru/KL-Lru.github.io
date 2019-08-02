#include<bits/stdc++.h>
using namespace std;
const int MOD = 1e+9+7;
int main(){
    string s;
    cin >> s;
    int pt = 1, n = s.size();
    int dp[100001][13] = {};
    dp[n][0] = 1;
    for(int i = n-1; i >= 0; i--){
        if(s[i] == '?'){
            for(int k = 0; k < 10; k++){
                for(int j = 0; j < 13; j++){
                    int rem = (k * pt + j) % 13;
                    dp[i][rem] = (dp[i][rem] + dp[i+1][j]) % MOD;
                }
            }
        }else{
            for(int j = 0; j < 13; j++){
                int rem = ((pt * (s[i] - '0')) + j) % 13;
                dp[i][rem] = (dp[i][rem] + dp[i+1][j]) % MOD;
            }
        }
        pt = (pt * 10) % 13;
    }
    cout << dp[0][5] << endl;
}
