### settings.py 内容
BASE_DIRは、manage.pyのあるディレクトリ
```python
STATIC_DIR = os.path,join(BASE_DIR, "static")
```

### psycopg[binary]のInstall
```shell
python -m pip install "psycopg[binary]"
```