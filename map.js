//             Target               ||       Map
//                                  ||
//   1 - Yellow       1 - Moom      ||   0 - wall
//   2 - Red          2 - Sun       ||   1 - empty space
//   3 - Blue         3 - Saturn    ||   2 - center
//   4 - Green        4 - Star      ||
//            55 - wild             ||
//   Ex. 44 - Green Star            ||
//
//==========================================================


var template = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0,-1,-1   ]
]

// One
var map1A = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   0,11, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,32, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,23, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1,44, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

var map1B = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,44, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0,23, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,11, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1,32, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

// Two
var map2A = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0,22, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,41, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1,34, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,13, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

var map2B = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,34, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1,41, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,22, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],

    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   ],
    [   0, 1, 1,   0,13, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

// Three
var map3A = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,14, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],

    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0,42, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,33, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0,21, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

var map3B = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,21, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1,42, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,14, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0,33, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

// Four
var map4A = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1,24, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0,43, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,12, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,31, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1,55, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]

var map4B = [
    [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,31, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1,12, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,43, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0   ],
    [   0, 1, 1,   1, 1, 1,   1,24, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,55, 0   ],
    [   0, 1, 1,   1, 1, 1,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],

    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1  ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   ],

    [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ],
    [   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0,-1,-1   ]
]


var gameTemplate = [
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     [   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0,   0, 0, 0   ],
     

]


// Rotate
function rotateCounterClockwise(a, c){
    if (!c) c = 1;
    else c = c % 4;
    for (; c > 0; c--){
        var n=a.length;
        for (var i=0; i<n/2; i++) {
            for (var j=i; j<n-i-1; j++) {
                var tmp=a[i][j];
                a[i][j]=a[j][n-i-1];
                a[j][n-i-1]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[n-j-1][i];
                a[n-j-1][i]=tmp;
            }
        }
    }
    return a;
}

function rotateClockwise(a, c) {
    if (!c) c = 1;
    else c = c % 4;
    for (; c > 0; c--){
        var n=a.length;
        for (var i=0; i<n/2; i++) {
            for (var j=i; j<n-i-1; j++) {
                var tmp=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
    }
    return a;
}

function cellSum(arr, cellX, cellY) {
    cellX *= 3;
    cellY *= 3;
    var sum = 0;
    for (var y = cellY; y < cellY + 3; y ++){
        for (var x = cellX; x < cellX + 3; x ++){
            sum += arr[y][x]
        }
    }
    return sum;
}

function tileType(arr, cellX, cellY){
    var sum = cellSum(arr, cellX, cellY)
    switch (sum){
        case -4: return 'inner corner';
        case 3: return 'two sides';
        case 4: return 'L'
        case 5:
        case 7:
        case 6: return 'one side';
        case 8: return 'one corner';
        case 9: return 'empty'
    }
    if (sum > 9) return "L";
}

function makeMap(m1, m2, m3, m4){
    var map = []
    ur =  rotateClockwise(m2);
    br = rotateClockwise(m3,2);
    bl = rotateCounterClockwise(m4);
    for (var i = 0; i < m1.length; i++){
        row = m1[i].concat(ur[i])
        map.push(row);
    }
    for (var i = 0; i < bl.length; i++){
        row = bl[i].concat(br[i])
        map.push(row);
    }
    return map;
}

function targetCode(arr, cellX, cellY){
    var y = (cellY*3)+1;
    var x = (cellX*3)+1;
    return arr[y][x];
}

function cornerRotation(arr, cellX, cellY){
    var x = cellX*3;
    var y = cellY*3;
    if (arr[y][x] == 1) return 0;
    if (arr[y][x+2] == 1) return 90;
    if (arr[y+2][x+2] == 1) return 180;
    if (arr[y+2][x] == 1) return 270;
}

function lineRotation(arr, cellX, cellY){
    var x = cellX*3;
    var y = cellY*3;
    if (arr[y][x+1] == 0) return 0;
    if (arr[y+1][x+2] == 0) return 90;
    if (arr[y+2][x+1] == 0) return 180;
    if (arr[y+1][x] == 0) return 270;
}

function newGameArray(arr){
    var ret = [];
    for (var i = 0; i < 16; i++){
        var arr = []
        for (var j = 0; j < 16; j++){
            arr.push(0);
        }
        ret.push(arr);
    }
    return ret;
}

function isMiddleOfBoard(x, y){
    return (x >= 7 && x <= 8) && (y >=7 && y <= 8)
}

function wallCellInDirectionFrom(dir, cellX, cellY, map, scene){
    var x = (cellX * 3) + 1;
    var y = (cellY * 3) + 1;
    var offset = offsetFromDir(dir);
    var yOff = offset.yOff;
    var xOff = offset.xOff;
    var mapValue = map[y + yOff][x + xOff];
    var sceneValue = 0
    // NOTE: change when you fix the maps: mapValue === 0
    while (mapValue !== 0 && sceneValue === 0){
        y += yOff;
        x += xOff;
        mapValue = map[y + yOff][x + xOff];

        var cellYPos = (y + yOff) % 3;
        var cellXPos = (x + xOff) % 3;
        
        var crossingDownOrRight = (dir=='down' || dir=='right') &&  (cellYPos === 0 || cellXPos === 0)
        var crossingUpOrLeft = (dir=='up' || dir=='left') &&  (cellYPos === 2 || cellXPos === 2)

        if ( crossingDownOrRight || crossingUpOrLeft ) {            
            cellY += yOff;
            cellX += xOff;
            sceneValue = scene[cellY][cellX];
        }
    }
    endCellX = Math.floor(x / 3);
    endCellY = Math.floor(y / 3);
    return {x: endCellX, y: endCellY}
}

function cellCenter(cellX, cellY){
    var x = ((cellX * 3) + 1.5) * 21;
    var y = ((cellY * 3) + 1.5) * 21;
    return {x: x, y: y}
}

function offsetFromDir(dir){
    var yOff = 0;
    var xOff = 0;
    switch (dir){
        case 'up':      yOff = -1;  break;
        case 'right':   xOff = 1;   break;
        case 'down':    yOff = 1;   break;
        case 'left':    xOff = -1;  break;
    }
    return {yOff:yOff, xOff:xOff}
}