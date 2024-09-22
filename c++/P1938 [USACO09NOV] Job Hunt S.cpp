#include <iostream>
#include <cstring>
#include <queue>
#include <deque>
using namespace std;

const int N = 10010;
const int M = 2 * N;

int dis[N], n, m, ans, d, f, s;
bool vis[N];

struct edge {
    int to, w;
};

vector<edge> e[M];

void spfa() {
    deque<int> q;
    memset(dis, 0xc0, sizeof dis); // 初始化为负无穷
    q.push_back(s);
    dis[s] = d;
    vis[s] = true;
    while (!q.empty()) {
        int u = q.front();
        q.pop_front();
        vis[u] = false;
        for (auto v : e[u]) {
            if (dis[v.to] < dis[u] + v.w) { // 注意这里是小于号
                dis[v.to] = dis[u] + v.w;
                if (!vis[v.to]) {
                    vis[v.to] = true;
                    if (!q.empty() && dis[v.to] > dis[q.front()]) {
                        q.push_front(v.to); // 优化，将松弛的节点插入队首
                    } else {
                        q.push_back(v.to);
                    }
                }
            }
        }
    }
}

int main() {
    cin >> d >> m >> n >> f >> s;
    for (int i = 1; i <= m; i++) {
        int u, v;
        cin >> u >> v;
        e[u].push_back({v, d});
    }
    for (int i = 1; i <= f; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        e[u].push_back({v, d - w}); // 注意这里是负权边
    }
    spfa();
    for (int i = 1; i <= n; i++) {
    	// cout << dis[i] << endl;
        ans = max(ans, dis[i]);
    }
    cout << ans << endl;
    return 0;
}
