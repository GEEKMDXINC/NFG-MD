const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk04MlBBaVVrcHRQVkx0U3JiSnZIWVNkdisrVVdYN2Fsa3JmVVFxeEhuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzB6eFFVMUlVTkZlam1yNlhEOEhLRlExVWg1T21tMzllUDl4RG00TUdqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Rml5czFxSDg4dWxWak5MMTNya2hydFN4N1E4RUlGSUlTWldxbHp0QmtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFeGNkaUEwbEZ0Yy9xVWdNV01NNXpjRHhVNDk3UW9vRXpFZWowaURUcFJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JV3ZTL2JzTzYyNnFFTW8zZDZpbW0yN3hNSXRVM2R6eHdLcDJmaEdkazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBHU2NPdy9sWHl1SXF6YlNpeE5CMHdYMGxiQ3ZCOFcyTjkxT1ltTEpxMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVB3bGR0NVJmSy9KTVJZTnE3aWprOC81MmU0RG00VVhYK1ZZZERiTFFrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaExBdmY2QlFBUzFLdFdhbG9rbEk5WUd2cyt6dGNTeHd3QU1YbW5PQzhYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFrKzlweVUwajBIWDdVOHBSdW4xSTBKS2JlSHJLcFQ0RnUvNUYwVmFJUExRbVR6bjl5eTBUU1Vic0t1aE51QmdSdXk1c3B5SENOdGorVENQMFE0eEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IkxHWFFCa0IvaU1LOXVPcU1xcDZTZ2hGdzBaQkRiYTE3SzZ3bVdYYWQ3NUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCX2phNVIxU1RsZTQ5UGhXejAwTGd3IiwicGhvbmVJZCI6ImYyZjA2ZTcyLTA3MjctNGVjNi05NjU2LTNkMzc5ZWY3MzBlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQkYrRnVSNlNzOHUrWnRjUnVTNm4zQVR3OFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic20yVWZkNUtydGcyOGFjOWkzblRId0QwZXF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxSM0FDRlY3IiwibWUiOnsiaWQiOiIyMzc2OTY5NDQzMzM6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0w0OCtBSEVNR1MzYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibFM5LzRoVHFkUzUvVldBVkdZK09yVkM3aTlyN2xIbU8vRlVicXRpY1JHQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRit6Qkg2Wis1SjVQZXBDQXVONTljZWVmTDFjSC9Cb1IybTZLM0tLS25oM0dkaWRWbUNrc0tMV2RTZVc2cHFXRWpzRENrWlFRYXF0RmprbGRzMVk5QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFMcW9GdHY4cXZQUXZ2cWVlZEdnakt6YTBVVnY2WU96cVNEYTBER0hQTHgzQVF4TGp0TXRpZ2hxVFNYaUNPS05HOURKSTZROWN0UUljZ25kY3NBdUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk2OTQ0MzMzOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlV2ZitJVTZuVXVmMVZnRlJtUGpxMVF1NHZhKzVSNWp2eFZHNnJZbkVSZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCJ9',
};
