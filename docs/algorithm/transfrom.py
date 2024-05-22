import os
import subprocess

# 定义要转换的文件夹路径
folder_path = '/Users/dahuang/Documents/hjywiki/docs/algorithm'

# 遍历文件夹下的所有文件
for filename in os.listdir(folder_path):
    # 检查文件是否为 Markdown 文件
    if filename.endswith('.md'):
        # 构造完整的文件路径
        file_path = os.path.join(folder_path, filename)
        
        # 构造输出 PDF 文件路径
        pdf_output = file_path.replace('.md', '.pdf')
        
        # 使用 pandoc 将 Markdown 文件转换为 PDF
        subprocess.run(['pandoc', file_path, '-o', pdf_output, '--pdf-engine=xelatex'])

print("所有 Markdown 文件已成功转换为 PDF。")
