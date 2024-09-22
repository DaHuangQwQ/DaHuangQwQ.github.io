#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

const int MAX_N = 200;
const int MAX_M = 10000;

vector<int> graph[MAX_N];
vector<pair<int, int>> key_roads;
int dfn[MAX_N], low[MAX_N];
bool in_stack[MAX_N];
stack<int> s;
int n, m, tim, component;

void tarjan(int u, int p) {
    dfn[u] = low[u] = ++tim;
    s.push(u);
    in_stack[u] = true;

    for (int v : graph[u]) {
        if (v == p) continue;  // 避免回头边
        if (dfn[v] == 0) {
            tarjan(v, u);
            low[u] = min(low[u], low[v]);
            if (low[v] > dfn[u]) {
                key_roads.push_back({min(u, v), max(u, v)});
            }
        } else if (in_stack[v]) {
            low[u] = min(low[u], dfn[v]);
        }
    }

    if (dfn[u] == low[u]) {
        component++;
        while (true) {
            int v = s.top();
            s.pop();
            in_stack[v] = false;
            if (v == u) break;
        }
    }
}

int main() {
    cin >> n >> m;

    for (int i = 0; i < m; ++i) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }


    for (int i = 1; i <= n; ++i) {
        if (dfn[i] == 0) {
            tarjan(i, -1);
        }
    }

    sort(key_roads.begin(), key_roads.end());

    for (auto road : key_roads) {
        cout << road.first << " " << road.second << endl;
    }

    return 0;
}
