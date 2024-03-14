# def cal(a, b):
#     return a + 2 * b

# print(cal(3, 5))
# print(cal(5, 3))
# print(cal(a=3, b=5))
# print(cal(b=5, a=3))

# def cal2(a, b=3):
#     return a + 2 * b

# print(cal2(4))
# print(cal2(4, 2))
# print(cal2(a=6))
# print(cal2(a=1, b=7))

# def call_names(*args):
#     for name in args:
#         print(f'{name}야 밥먹어라~')

# call_names('철수','영수','희재','원준')

def get_kwargs(**kwargs):
    print(kwargs)

get_kwargs(name='bob')
get_kwargs(name='john', age='27', school='middlew')