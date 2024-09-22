#include <iostream>
#define endl "\n"
using namespace std;
const int N = 1111111;
char str[N];
int kmp[N],j,n;

int main(){
    cin >> n;
    scanf("%s", str+1);

    for(int i = 2;i <= n;i++){
        while(j && str[i] != str[j+1]){
            j = kmp[j];
        }
        if(str[i] == str[j + 1]){
            j++;
        }
        kmp[i] = j;
    }
    for(int i = 1;i <= n;i++){
        cout << kmp[i] << " ";
    }
    cout << endl;
    cout << n - kmp[n] << endl;
    return 0;
}