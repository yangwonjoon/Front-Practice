from PIL import Image, ImageTk
import tkinter as tk

#윈도우 생성, 캔버스 생성
window = tk.Tk()
canvas = tk.Canvas(window,width=500,height=500)
canvas.pack()

#이미지
img = Image.open("")

#tk형식으로 영상 변환
tk_img = ImageTk.PhotoImage(img)

#캔버스에 영상 표시
canvas.create_image(250,250,image=tk_img)

window.mainloop()