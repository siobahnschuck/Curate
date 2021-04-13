import boto3
from dotenv import load_dotenv
import os

ACCESS_KEY = os.getenv('AWS_ACCESS_KEY')
SECRET_KEY = os.getenv('AWS_SECRET')
REGION= os.getenv('AWS_REGION')
BUCKET = os.getenv('AWS_BUCKET')

s3 = boto3.client('s3', aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_KEY, region_name=REGION)

def upload(file, acl='public-read'):
    uploaded = s3.upload_fileobj(file, BUCKET, file.filename, ExtraArgs={
      "ACL": acl,
      "ContentType": file.content_type
    })
    return "https://{bucket}.s3.amazonaws.com/{filename}".format(bucket=BUCKET, filename=file.filename)