import json
import os

# 각 음식 카테고리별 서브디렉토리가 있는 루트 디렉토리
root_directory = 'C:/Users/Ahn Yoon Ju/OneDrive/바탕 화면/LuvSOJU_DeepLearning/before_merging_data'

# 각 서브디렉토리(음식 카테고리)를 반복
for food_category in os.listdir(root_directory):
    category_directory = os.path.join(root_directory, food_category)

    # 디렉토리가 아닌 항목은 건너뛰기
    if not os.path.isdir(category_directory):
        continue

    # 현재 음식 카테고리의 JSON 디렉토리
    json_directory = os.path.join(category_directory, 'json')

    # 현재 음식 카테고리의 PNG 디렉토리
    png_directory = os.path.join(category_directory, 'png')

    # 현재 음식 카테고리의 데이터를 저장할 리스트
    combined_data = []

    # 현재 음식 카테고리의 각 JSON 파일에 대해 반복
    for filename in os.listdir(json_directory):
        if filename.endswith('.json'):
            json_filepath = os.path.join(json_directory, filename)

            # JSON 파일 읽기 (UTF-8)
            with open(json_filepath, 'r', encoding='utf-8-sig') as json_file:
                json_data = json.loads(json_file.read())

            # "instance_num"을 기반으로 파일 이름 생성
            instance_num = json_data["instance_num"]
            filename_format = f'{food_category.lower()}_{instance_num:04d}'

            # PNG 파일과 연결 (파일 이름 기준)
            png_filename = f'{filename_format}.png'
            png_filepath = os.path.join(png_directory, png_filename).replace("\\", "/")
            json_data["image_path"] = png_filepath

            # 현재 음식 카테고리 리스트에 추가
            combined_data.append(json_data)

    # 'instance_num'을 기준으로 데이터 정렬
    combined_data.sort(key=lambda x: x.get('instance_num', 0))

    # 현재 음식 카테고리의 출력 파일 경로
    output_file_path = f'C:/Users/Ahn Yoon Ju/OneDrive/바탕 화면/LuvSOJU_DeepLearning/data/{food_category}.json'

    # 현재 음식 카테고리의 데이터를 출력 파일에 저장
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        json.dump(combined_data, output_file, indent=4)

    # JSON 파일 완성
    print(f'{food_category} png, json 파일 {output_file_path} 에 합치기 완료')