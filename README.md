# 聖殿節 · 光與願的相遇

一個以「聖殿節」為主題的單頁活動網站範例，使用你提供的兩張風景照作為主視覺。網站為純前端（HTML / CSS / JavaScript），可直接部署到 GitHub Pages。

## 檔案結構

```
.
├── index.html                  # 網站首頁
├── assets/
│   ├── css/style.css           # 樣式與動畫
│   ├── js/main.js              # 選單、進場動畫與表單示範
│   └── img/
│       ├── hero-landscape.jpg  # 主視覺（postcard_final.jpg）
│       └── festival-landscape.png # 第二張圖（1.png）
└── README.md
```

> 兩張圖片已從原路徑複製到 `assets/img/`，原始檔案沒有被更動。

## 本機預覽

直接雙擊 `index.html` 即可開啟。若想用本機伺服器：

```powershell
python -m http.server 8000
```

然後在瀏覽器開啟 `http://localhost:8000`。

## 發布到 GitHub Pages

### 方式一：網頁上傳（不需要安裝 Git）

1. 到 <https://github.com/new> 登入並建立一個新的 repository。
   - Repository name：例如 `temple-festival`
   - 可選擇 Public（GitHub Pages 免費方案需要）
   - **不要**勾選「Add a README file」等初始化選項
2. 進入新 repo，點 **Add file → Upload files**。
3. 把這個資料夾裡的 `index.html`、`README.md` 整包 `assets/` 資料夾拖曳上傳，按 **Commit changes**。
4. 點右上方 **Settings → Pages**。
5. 在 **Build and deployment** 的 Source 選擇 `Deploy from a branch`。
6. Branch 選 `main`（或 `master`），資料夾選 `/ (root)`，按 **Save**。
7. 等待幾分鐘後，網址會顯示在 Pages 設定頁，通常格式為：
   `https://<你的帳號>.github.io/temple-festival/`

### 方式二：使用 Git 指令

```powershell
git init
git add .
git commit -m "Initial temple festival site"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

之後到 repo 的 **Settings → Pages** 啟用 GitHub Pages 即可。

## 可以自行修改的地方

- 活動名稱、日期、地點：搜尋 `index.html` 中的 `聖殿節`、`2026.12.19`、`聖殿廣場`。
- 日程與亮點：修改 `#schedule`、`#highlights` 區段。
- 圖片：直接替換 `assets/img/` 內的兩個檔案，或更新 HTML 中的 `src` 與 `alt`。
- 配色：調整 `assets/css/style.css` 最上方的 `:root` 變數（ `--red`、`--gold` 等）。

## 注意事項

- 活動內容、交通資訊與報名表單都是**範例**，表單不會真的傳送資料。
- 字型使用 Google Fonts（Noto Serif TC / Noto Sans TC）；若無法連線，會自動退回系統字型。
