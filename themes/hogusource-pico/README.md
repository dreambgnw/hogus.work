# Hogusource Tailwind Theme

hogusourceテーマをTailwind CSSで刷新したバージョンです。元のデザインのイメージを保ちながら、モダンなTailwind CSSのユーティリティクラスを使用して実装されています。

## 特徴

- 🎨 Tailwind CSSによるモダンなスタイリング
- 🌟 ガラスモーフィズム（Glass morphism）デザイン
- 📱 完全レスポンシブ対応
- ⚡ 軽量で高速
- 🎯 hogusourceのデザインイメージを維持

## セットアップ

### 1. 依存関係のインストール

テーマディレクトリに移動して、npmパッケージをインストールします：

```bash
cd themes/hogusource-tailwind
npm install
```

### 2. Tailwind CSSのビルド

開発中は、以下のコマンドでTailwind CSSをウォッチモードでビルドします：

```bash
npm run watch:css
```

本番用にビルドする場合は：

```bash
npm run build:css
```

### 3. Hugoサイトでテーマを使用

`config.toml`でテーマを指定します：

```toml
theme = "hogusource-tailwind"
```

### 4. 静的ファイルのコピー

元のhogusourceテーマから必要な静的ファイル（画像、フォントなど）をコピーする必要がある場合があります：

```bash
# 画像ファイル
cp -r themes/hogusource/static/img themes/hogusource-tailwind/static/

# フォントファイル
cp -r themes/hogusource/static/fonts themes/hogusource-tailwind/static/
```

## カスタマイズ

### カラーテーマ

`tailwind.config.js`の`colors`セクションでカラーテーマをカスタマイズできます：

```javascript
colors: {
  'mint': {
    50: '#eaf4f5',
    // ...
  },
  'accent': {
    DEFAULT: '#5ca9c9',
    dark: '#4a87a1',
  },
}
```

### フォント

`tailwind.config.js`の`fontFamily`セクションでフォントを変更できます。

## 開発

Tailwind CSSのビルドプロセスは、`assets/css/main.css`を入力として、`static/css/style.css`に出力します。

変更を加えた後は、必ずTailwind CSSを再ビルドしてください。

## ライセンス

MIT

