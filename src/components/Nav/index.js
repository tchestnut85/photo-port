import React from 'react';

function categorySelected(name) {
    console.log(`${name} clicked`);
}
function Nav() {
    const categories = [
        {
            name: 'Commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects.',
        },
        {
            name: "Portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "Food",
            description: "Delicious delicacies"
        },
        {
            name: "Landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    return (
        <header>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'>📸 Oh Snap!</span>
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;