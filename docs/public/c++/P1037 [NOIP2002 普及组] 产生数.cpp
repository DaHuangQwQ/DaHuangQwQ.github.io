#include <iostream>
using namespace std;
#define lll __uint128_t

void out(lll x){ //int128输出要自己写
	if(x>9)out(x/10);
	putchar(x%10+48);
}

int main(){


	lll a = 100121312312312311;
	lll b = 123213123123123312;
	out(a + b);
	
	return 0;
}