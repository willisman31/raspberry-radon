#for i in range(100):
#    print("Hello World")


def f(x):
    for i in range(x):
        print(x)

f(3)


#Optional parameter function
def optParam(x = 3):
    """
    Prints input raised to the power of itself
    : param x: is input to raised to the power of itself
    : return: input to power of itself.
    """
    print(x ** x)
    return x**x

optParam()
optParam(12)


#Practice with exceptions
def div_by_zero():
    """
    Takes 2 user inputs and prints their quotient
    """
    a = input("Enter a number:")
    b = input("Enter a divisor:")
    try:
        a = int(a)
        b = int(b)
        print(a/b)
    except (ZeroDivisionError, ValueError):
        print("number and divisor must be non-zero integers")
        div_by_zero()

div_by_zero()

x = ["example", "fruit", "stuff"]
x.append(1.1)
x.append(True)
x.append("")
x.append("asdf")
print(x[0])
x.pop()

# difference between tuple and list is that tuples are immutable
y = ("this", "is", "an", "immutable", "tuple",)

print(y[3])

"""
dictionary holds key to value
values can repeat, keys cannot
tuples can hold list/dictionary
lists can hold tuples/dictionary
list, tuple, or dictionary can be a value in a dictionary
"""
my_dict = dict()
my_dict[1] = 2
my_dict["key"] = "value"

"key" in my_dict # true
"value" in my_dict # false

del my_dict[1]

1 in my_dict # false



