import React, { useEffect } from 'react';

const AnimatedHeadings = () => {
    useEffect(() => {
        const animatedTexts = document.querySelectorAll('.tw-animated-text');

        animatedTexts.forEach((text) => {
            text.innerHTML = text.textContent
                .split('')
                .map(
                    (letter, index) =>
                        `<span style="display: inline-block; opacity: 0; animation: fadeIn 1s ${index * 0.1}s forwards;">${letter}</span>`
                )
                .join('');
        });

        
        const interval = setInterval(() => {
            animatedTexts.forEach((text) => {
                const spans = text.querySelectorAll('span');

                spans.forEach((span, index) => {
                    span.style.opacity = '0';
                    span.style.animation = `fadeIn 1s ${index * 0.1}s forwards`;
                });
            });
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="tw-ef">
            <h4 className="tw-animated-text" style={{ fontSize: '20px', marginTop:'-32em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>With  InnoMiate,</h4>
            <h4 className="tw-animated-text" style={{ fontSize: '20px',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}> Hackathon Management</h4>
            <h4 className="tw-animated-text" style={{ fontSize: '20px', textIndent: '17px',marginLeft: '60px',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Becomes Flexible, Organized</h4>
            <h4 className="tw-animated-text" style={{ fontSize: '20px', textIndent: '30px', marginLeft: '60px',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}> and Streamlined!</h4>
        </div>
    );
};

export default AnimatedHeadings;
