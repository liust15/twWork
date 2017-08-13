# 编程小道场

把数字转化为lcd灯的表现形式，打印在控制台上。下面是0~9的样子：

    ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
    |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
    |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|


例子: 910


    ._. ... ._.
    |_| ..| |.|
    ..| ..| |_|


## 参考资料

- [Array#join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?v=example)
- [Array#push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=example)
- [Sting Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## 答题流程
- 请用户仔细阅读题目要求和题目描述

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
NOTE：如果提示git命令未找到请先阅读参考资料
- 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
src   //源文件
```
`请在src文件下的main.js文件内实现main函数`

- 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
- 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 
- 获取分支
- 提交
- 等待结果


## 如何本地运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。

