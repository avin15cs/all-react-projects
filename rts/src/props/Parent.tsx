import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => console.log('clicked')}
      children={'ghjkl'}
    />
  );
};

export default Parent;

//Agar tm <Child props>"Asdfghjkl"</Child> aise define karoge toh tmko interface mein children karke define karna padega but <ChildAsFC>"Asdfg"</ChildAsFC> React.FC
//Isme zarurat nahi hai children karke define karne kaa
