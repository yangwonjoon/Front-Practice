#함수

def check_gender(pin):
    gender = int(pin.split('-')[1][0])
    if(gender % 2 == 0 ):
        print('여성임')
    else:
        print('남성임')
    

my_pin = '200101-4012345'
check_gender(my_pin)