import React, { Component } from 'react';
import './Home.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

export default class Home extends Component {
    render(){
        return (
            <div>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <h3>They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. We'll put a happy little sky in here. This is the fun part Imagination is the key to painting.</h3>
                <p>If you don't like it - change it. It's your world. Go out on a limb - that's where the fruit is. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. Nothing wrong with washing your brush.

                    And just raise cain. Let's give him a friend too. Everybody needs a friend. Let all these little things happen. Don't fight them. Learn to use them. Painting should do one thing. It should put happiness in your heart. You can work and carry-on and put lots of little happy things in here.

                    There's not a thing in the world wrong with washing your brush. Even trees need a friend. We all need friends. Everyone is going to see things differently - and that's the way it should be. Just a little indication. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect.

                    This is your creation - and it's just as unique and special as you are. Happy painting, God bless. It's important to me that you're happy. Put your feelings into it, your heart, it's your world. We'll play with clouds today. If it's not what you want - stop and change it. Don't just keep going and expect it will get better.

                    This is probably the greatest thing that's ever happened in my life. The light is your friend. Preserve it. It just happens - whether or not you worried about it or tried to plan it. Here's another little happy bush Everyone wants to enjoy the good parts - but you have to build the framework first. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do.

                    Be brave. Let your imagination be your guide. In nature, dead trees are just as normal as live trees.

                    We don't make mistakes we just have happy little accidents. La- da- da- da- dah. Just be happy. When things happen - enjoy them. They're little gifts. Look at them little rascals. Just think about these things in your mind and drop em' on canvas.

                </p>
            </div>
            <Footer />
            </div>
            
        );
    }
}