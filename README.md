# Minimal Remotion on Cloud Run

Creates a 3-second "Hello World" video using Remotion + Cloud Run.

## Setup & Deploy

1. Clone and install:

git clone <https://github.com/yourusername/minimal-remotion-cloudrun>
cd minimal-remotion-cloudrun
npm install

2. Deploy to Cloud Run:

gcloud auth login
gcloud config set project YOUR_PROJECT_ID
npx remotion cloudrun deploy

3. Render video:

npx remotion cloudrun render HelloWorld output.mp4
npx remotion cloudrun download output.mp4

## Local Testing

npm start     # Preview in browser
npm run build # Test render locally

## Extend It

- Edit src/HelloWorld.tsx to change content
- See [Remotion docs](https://www.remotion.dev/docs) for animations, audio, etc.

## Notes

- Free tier: 2M requests/month
- Max render: 60 minutes
- Costs: Pay-per-use (~$0.00002/second)
