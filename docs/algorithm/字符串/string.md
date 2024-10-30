# 字符串

## 最小表示法

```cpp
const int N = 3e5 + 10;
// https://www.luogu.com.cn/problem/P1368 最小表示法
int n;
int a[N<<1];

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++) {
        cin >> a[i];
        a[i+n] = a[i];
    }
    int i = 1, j = 2, k = 0;
    while(i <= n && j <= n){
        for(k = 0; k < n && a[i + k] == a[j + k]; k++);
        a[i + k] > a[j + k] ? i = i + k + 1 : j = j + k + 1;
        if(i == j) j++;
    }
    for(int l = min(i, j);l < min(i, j) + n; l++){
        cout << a[l] << " ";
    }
    // cout << min(i, j) << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## 字符串哈希

```cpp
const int N = 1e5 + 10;
int n;
const int P = 131;
ll p[N], h[N];
ll a[N];

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        string str; cin >> str;
        p[0] = 1;
        h[0] = 0;
        for(int i = 1;i <= str.size();i++){
            p[i] = p[i - 1] * P;
            h[i] = h[i-1] * P + str[i];
        }
        int l = 1;
        int r = str.size() - 1;
        ll has = h[r] - h[l - 1] * p[r - l - 1];
        // cout << has << endl;
        a[i] = has;
    }
    sort(a + 1, a + n + 1);
    int num = unique(a + 1, a + n + 1) - a - 1;
    cout << num << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## KMP

```cpp
const int N = 1e6 + 10;
int m,n;
char S[N],P[N];
int nxt[N];

void solve(){
    cin>>S+1>>P+1;
    m=strlen(S+1),n=strlen(P+1);
    
    nxt[1]=0;

    for(int i=2,j=0;i<=n;i++){
        while(j && P[i]!=P[j+1]) j=nxt[j];
        if(P[i]==P[j+1]) j++;
        nxt[i]=j;
    }
    
    for(int i=1,j=0;i<=m;i++){
        while(j && S[i]!=P[j+1]) j=nxt[j];
        if(S[i]==P[j+1]) j++;
        if(j==n) printf("%d\n",i-n+1);
    }
    
    for(int i=1;i<=n;i++)printf("%d ",nxt[i]);
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## Z函数

```cpp
const int N = 2e7 + 10;
int z[N], p[N];
char s[N], t[N];
void get_z(char *s, int n){
    z[1] = n;
    for(int i = 2,l,r = 0; i <= n;i++){
        if(i <= r) z[i] = min(z[i - l + 1], r - i + 1);
        while(s[1 + z[i]] == s[i + z[i]]) z[i] ++;
        if(i + z[i] - 1 > r) l = i, r = i + z[i] - 1;
    }
}

void get_p(char*s,int n,char*t,int m){
    for(int i = 1, l, r = 0; i <= m; i++){
        if(i <= r) p[i] = min(z[i-l+1], r-i+1);
        while(1 + p[i] <= n && i + p[i] <= m && s[1 + p[i]] == t[i + p[i]]) p[i]++;
        if(i + p[i] - 1 > r) l = i, r = i + p[i] - 1;  
    }
}

void solve(){
    cin >> t+1 >> s+1;
    int m = strlen(t+1), n = strlen(s+1);
    get_z(s,n);
    get_p(s,n,t,m);
    long long ans1 = 0, ans2 = 0;
    for(int i=1; i<=n; i++) ans1 ^= 1LL * i * (z[i] + 1);
    for(int i=1; i<=m; i++) ans2 ^= 1LL * i * (p[i] + 1);
    cout << ans1 << endl << ans2;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## 马拉车

```cpp
const int N = 3e7 + 10;
char a[N], s[N];
int d[N];

void get_d(char* s, int n){
    d[1] = 1;
    for(int i = 2, l, r = 1; i <= n;i++){
        if(i <= r) d[i] = min(d[r - i + l], r - i + 1);
        while(s[i - d[i]] == s[i + d[i]]) d[i]++;
        if(i + d[i] - 1 > r) l = i - d[i] + 1, r = i + d[i] - 1;
    }
}

void solve(){
    cin >> a + 1;
    int n = strlen(a + 1);
    int k = 0;
    s[0] = '$';
    s[++k] = '#';
    for(int i = 1;i <= n;i++){
        s[++k] = a[i];
        s[++k] = '#';
    }
    n = k;
    get_d(s, n);
    int res = 0;
    for(int i = 1;i <= n;i++){
        res = max(res, d[i]);
    }
    cout << res - 1 << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## 字典树

```cpp
const int N = 3e6 + 10;
int n, m;

int ch[N][65], cnt[N], idx;
char s[N], str[N];

int getnum(char x){
    if(x>='A'&&x<='Z')
        return x-'A';
    else if(x>='a'&&x<='z')
        return x-'a'+26;
    else
        return x-'0'+52;
} 

void insert(char *s){
    int p = 0;
    for(int i = 0; s[i]; i++) {
        int j = getnum(s[i]);
        if(!ch[p][j]) ch[p][j] = ++idx;
        p = ch[p][j];
        cnt[p]++;
    }
    // cnt[p]++;
}

int query(char *s){
    int p = 0;
    for(int i = 0; s[i]; i++) {
        int j = getnum(s[i]);
        if(!ch[p][j]) return 0;
        p = ch[p][j];
    }
    return cnt[p];
}

void solve(){
    for(int i = 0; i <= idx; i++)
        for(int j = 0;j <= 65; j++)
            ch[i][j] = 0;
    for(int i = 0; i <= idx; i++)
        cnt[i] = 0;
    idx = 0;
    cin >> n >> m;
    for(int i = 1; i <= n;i++){
        cin >> s;
        insert(s);
    }
    while(m--){
        cin >> str;
        cout << query(str) << endl;
    }
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## 01Trie 最大异或对

```cpp
const int N = 1e5 + 10;
// 1、异或：两个数进行按位异或运算，相同为 
// https://www.luogu.com.cn/problem/P10471
int n;
int a[N];
int ch[N*31][2], idx;

void insert(int x){
    int p = 0;
    for(int i = 30; i >= 0;i--){
        int j = x >> i & 1; // 取出第一位数
        if(!ch[p][j]) ch[p][j] = ++idx;
        p = ch[p][j];
    }
}

int query(int x){
    int p = 0;
    int res = 0;
    for(int i = 30; i >= 0;i--){
        int j = x >> i & 1; // 取出第一位数
        if(ch[p][!j]) {
            res += 1 << i;
            p = ch[p][!j];
        }else {
            p = ch[p][j];
        }
    }
    return res;
}

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        cin >> a[i];
        insert(a[i]);
    }
    int res = 0;
    for(int i = 1;i <= n;i++){
        res = max(res, query(a[i]));
    }
    cout << res << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## AC自动机

```cpp
const int N = 1e6 + 10;
int n;
int ch[N][26], cnt[N], idx;
int ne[N];

void insert(char *s){
    int p = 0;
    for(int i = 0; s[i];i++){
        int j = s[i] - 'a';
        if(!ch[p][j]) ch[p][j] = ++idx;
        p = ch[p][j];
    }
    cnt[p]++;
}

void build(){
    queue<int> q;
    for(int i = 0;i < 26;i++){
        if(ch[0][i]) q.push(ch[0][i]);
    }
    while(!q.empty()){
        int u = q.front();
        q.pop();
        for(int i = 0;i < 26;i++){
            int v = ch[u][i];
            if(v){
                ne[v] = ch[ne[u]][i];
                q.push(v);
            }else {
                ch[u][i] = ch[ne[u]][i];
            }
        }
    }
}

int query(char *s){
    int res = 0;
    for(int k = 0,i = 0; s[k]; k++){
        i = ch[i][s[k] - 'a'];
        for(int j = i; j && ~cnt[j]; j = ne[j]){ // 走到根节点 或者 没有标记
            res += cnt[j];
            cnt[j] = -1;
        }
    }
    return res;
}
char str[N];
void solve(){
    cin >> n;
    while(n--){
        cin >> str;
        insert(str);
    }
    build();
    cin >> str;
    cout << query(str) << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

## SAM后缀自动机

```cpp
const int N = 2e6 + 10;
// https://www.luogu.com.cn/problem/P3804
char str[N];
vector<int> e[N];//邻接表
ll cnt[N], ans;
int tot = 1, np = 1;
//fa链接边终点,ch转移边终点,len最长串长度
int fa[N], ch[N][26], len[N];

void extend(int c){
    //p回跳指针, np新点, q链接点, nq新链接点
    int p = np; 
    np = ++tot;//p指向旧点, np是新点
    len[np] = len[p] + 1;
    cnt[np] = 1;//子串出现次数 
    //p沿链接边回跳，从旧点向新点建转移边
    for(; p && !ch[p][c]; p = fa[p]) ch[p][c]=np;
    
    //1.如果c是新字符，从新点向根节点建链接边
    if(p == 0) fa[np] = 1;
    else {//如果c是旧字符
        int q = ch[p][c];//q是链接点
        //2.若链接点合法，从新点向q建链接边
        if(len[q] == len[p] + 1) fa[np] = q;
        //3.若链接点不合法，则裂开q点，重建两类边
        else {
            int nq = ++tot;//nq是新链接点
            len[nq] = len[p] + 1;
            //重建nq,q,np的链接边
            fa[nq] = fa[q];
            fa[q] = nq;
            fa[np] = nq;
            //指向q的转移边改为指向nq
            for(; p && ch[p][c] == q; p = fa[p]) ch[p][c] = nq;
            //从q发出的转移边复制给nq
            memcpy(ch[nq], ch[q], sizeof(ch[q]));
        }
    }
}

void dfs(int u){ 
    for(auto v : e[u]){
        dfs(v);
        cnt[u] += cnt[v];
    }
    if(cnt[u] > 1) ans = max(ans,cnt[u]*len[u]);
}

void solve(){
    cin >> str;
    for(int i = 0; str[i]; i++) extend(str[i] - 'a');
    for(int i = 2; i <= tot; i++) e[fa[i]].push_back(i);
    dfs(1);
    cout << ans << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

