// 1 - Yellow       1 - Moom
// 2 - Red          2 - Sun
// 3 - Blue         3 - Saturn
// 4 - Green        4 - Star

// Ex. 44 - Green Star


var template = [
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ]
]

var map1A = [
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1,11, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0,32, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,23, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1,44, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ]
]

var map1B = [
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,44, 0,   0, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1   ],

     [   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1   ],
     [   1, 1, 0,   0,23, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1   ],

     [   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0,11, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1,34, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ]
]

var template = [
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,14, 0,   0, 1, 1   ],
     [   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1   ],

     [   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1   ],
     [   1, 1, 0,   0,42, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0,   0, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1,33, 0,   0, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 0,   0,21, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1   ],

     [   1, 1, 1,   1, 1, 1,   1, 1, 0,   0, 0, 0,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 0, 0   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ],
     [   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   1, 1, 1,   0, 2, 2   ]
]