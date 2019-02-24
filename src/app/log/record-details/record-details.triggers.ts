import { transition, animate, style, state } from '@angular/animations';

export const recordDetailTriggers = {
    open: [
        transition(
            ':enter', [
                style({
                    // opacity: 0,
                    maxWidth: '0px'
                }),
                animate('100ms', style({
                    // opacity: 1,
                    maxWidth: '500px'
                }))
            ]
        ),
        transition(
            ':leave', [
                style({
                    // opacity: 1,
                    maxWidth: '500px'
                    }),
                animate('100ms', style({
                    //  opacity: 0,
                     maxWidth: '0px'
                }))
            ]
        )
    ]
}