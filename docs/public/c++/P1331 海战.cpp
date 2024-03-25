#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int MAX_R = 100;
const int MAX_C = 100;

int R, C;
char grid[MAX_R][MAX_C];
bool visited[MAX_R][MAX_C];

const int dr[] = {1, -1, 0, 0};
const int dc[] = {0, 0, 1, -1};

bool is_valid(int r, int c) {
    return r >= 0 && r < R && c >= 0 && c < C;
}

bool bfs(int r, int c) {
    queue<pair<int, int>> q;
    q.push({r, c});
    visited[r][c] = true;

    while (!q.empty()) {
        pair<int, int> current = q.front();
        q.pop();

        for (int i = 0; i < 4; i++) {
            int nr = current.first + dr[i];
            int nc = current.second + dc[i];

            if (is_valid(nr, nc) && grid[nr][nc] == '#' && !visited[nr][nc]) {
                q.push({nr, nc});
                visited[nr][nc] = true;
            }
        }
    }

    return true;
}

int count_ships() {
    int ship_count = 0;

    for (int i = 0; i < R; i++) {
        for (int j = 0; j < C; j++) {
            if (grid[i][j] == '#' && !visited[i][j]) {
                if (bfs(i, j)) {
                    ship_count++;
                } else {
                    return -1; // If a ship has adjacent #
                }
            }
        }
    }

    return ship_count;
}

int main() {
    cin >> R >> C;

    for (int i = 0; i < R; i++) {
        for (int j = 0; j < C; j++) {
            cin >> grid[i][j];
            visited[i][j] = false;
        }
    }

    int result = count_ships();

    if (result == -1) {
        cout << "Bad placement." << endl;
    } else {
        cout << "There are " << result << " ships." << endl;
    }

    return 0;
}
