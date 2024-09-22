#include <iostream>
#include <queue>
#include <cstring>
#include <vector>
using namespace std;
typedef pair<int, int> PII;

const int N = 110005;
const int M = 2 * N;

struct edge {
    int to, w;
};

vector<edge> e[M];

int dis[N], head[N];
bool vis[N];

int n, m, k;

void add(int u, int v, int w = 0) {
    e[u].push_back({v, w});
}

priority_queue<PII, vector<PII>, greater<PII>> q;

void dijkstra(int s) {
    memset(dis, 0x3f, sizeof dis);
    q.push(make_pair(0, s));
    dis[s] = 0;
    while (!q.empty()) {
        int u = q.top().second;
        q.pop();
        if (vis[u]) continue;
        vis[u] = true;
        for (auto& edge : e[u]) {
            int to = edge.to;
            if (dis[to] > dis[u] + edge.w) {
                dis[to] = dis[u] + edge.w;
                q.push(make_pair(dis[to], to));
            }
        }
    }
}

int main() {
    cin >> n >> m >> k;
    int s, t;
    cin >> s >> t;
    while (m--) {
        int u, v, w;
        cin >> u >> v >> w;
        e[u].push_back({v, w});
    	e[v].push_back({u, w});
        for (int j = 1; j <= k; j++) {
            add(u + (j - 1) * n, v + j * n);
            add(v + (j - 1) * n, u + j * n);
            add(u + j * n, v + j * n, w);
            add(v + j * n, u + j * n, w);
        }
    }
    for (int i = 1; i <= k; ++i) {
        add(t + (i - 1) * n, t + i * n);
    }
    dijkstra(s);
    cout << dis[t + k * n] << endl;
    return 0;
}
