import { transition, animate, style, state } from '@angular/animations';

export const dateSliderTriggers = {
    slideLeft: [
        state('inProgress',
            style(
                {
                    transform: 'translateX(100%)'
                }
            )
        ),
        state('complete', 
            style(
                {}
            )
        ),
        transition('inProgress => complete', 
            [
                animate(200)
            ]
        )
    ],
    slideRight: [
        state('inProgress',
            style(
                {
                    transform: 'translateX(-100%)'
                }
            )
        ),
        state('complete', 
            style(
                {}
            )
        ),
        transition('inProgress => complete', 
            [
                animate(200)
            ]
        )
    ]
}