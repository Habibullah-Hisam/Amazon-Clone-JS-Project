#include<stdio.h>
int main()
{
    printf("Det. of Matrix 3*3:\n");
    int a11,a12,a13,a21,a22,a23,a31,a32,a33,x;
    printf("\nEnter the value of a11\n");
    scanf(" %d",&a11);
    printf("\nEnter the value of a12\n");
    scanf(" %d",&a12);
    printf("\nEnter the value of a13\n");
    scanf(" %d",&a13);
    printf("\nEnter the value of a21\n");
    scanf(" %d",&a21);
    printf("\nEnter the value of a22\n");
    scanf(" %d",&a22);
    printf("\nEnter the value of a23\n");
    scanf(" %d",&a23);
    printf("\nEnter the value of a31\n");
    scanf(" %d",&a31);
    printf("\nEnter the value of a32\n");
    scanf(" %d",&a32);
    printf("\nEnter the value of a33\n");
    printf("\nEnter the value of a33\n");
    scanf(" %d",&a33);
    x = ((a11*((a22*a33)-(a23*a32)))-(a12*((a21*a33)-(a31*a23)))+(a13*((a21*a32)-(a31*a22))));
    printf("the determination of your Matrix is :%d",x);
}