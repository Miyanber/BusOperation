# 開発関連メモ

## DEBUG=False時に静的ファイルが読み込まれない場合
- まずはcollectstaticを実行済みかどうかチェック
- whitenoiseをMIDDLEWAREにちゃんと追加しているかどうか
  - なおこの際、他のMIDDLEWAREよりも上位出ないといけない？

```python
MIDDLEWARE = [
    # 追加
    'whitenoise.middleware.WhiteNoiseMiddleware',
]
```

## settings.py 内容補足
BASE_DIRは、manage.pyのあるディレクトリを指します。
```python
STATIC_ROOT = os.path.join(BASE_DIR, "static")
```

### psycopg2[binary]のInstall
```shell
python -m pip install "psycopg2[binary]"
```