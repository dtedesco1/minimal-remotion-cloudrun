import {Composition, registerRoot, AbsoluteFill} from 'remotion';

export const HelloWorld = () => {
  return (
    <AbsoluteFill style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontSize: '100px'}}>Hello World</h1>
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => {
  return (
    <Composition
      id="HelloWorld"
      component={HelloWorld}
      durationInFrames={90}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionRoot);
