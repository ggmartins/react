aws s3 cp OG-DB403_201908_SOC_20190815130245.png s3://replace/images/ --profile replace
aws s3api put-object-acl --acl public-read  --bucket replace --key images/OG-DB403_201908_SOC_20190815130245.png --profile replace
aws s3api put-bucket-cors --bucket replace --profile cdac-misc --cors-configuration '{"CORSRules": [{"AllowedOrigins": ["*"], "AllowedMethods":["GET"]}]}'
