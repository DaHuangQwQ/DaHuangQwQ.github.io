#include <vector>
#include <iostream>
using namespace std;
const int N = 1010;

struct edge{
    int to;
};
vector<edge> e[N];

int n,m,s[n],MOD = 80112002;



int dfs(int st){
    if(s[st]) return s[st];
    int sum = 0;
    for(auto v : e[st]){
        int to = v.to;
        sum += dfs(to) % MOD;
    }
}