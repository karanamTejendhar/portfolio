import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  background-color:${({ theme }) => theme.toggleBg};
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  outline: none;
  z-index:9999
  }
`;

const Sun = styled.svg`
 height: auto;
 width: 1.5rem;
 transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: auto;
  width: 1.5rem;
  transition: all 0.7s linear;
`

const Toggle = ({theme,  toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ?
        <Moon xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="-3 -3 1280.000000 1145.000000"><g transform="translate(0.000000,1145.000000) scale(0.100000,-0.100000)"
        fill="#d63131" stroke="none">
        <path d="M3020 8261 c-476 -159 -999 -432 -1360 -710 -790 -608 -1325 -1436
        -1549 -2396 -78 -337 -105 -574 -105 -950 0 -282 6 -383 40 -610 102 -692 368
        -1331 792 -1905 558 -755 1387 -1312 2302 -1549 882 -229 1763 -176 2615 156
        183 71 649 303 795 395 245 155 471 326 635 481 l80 76 -91 -25 c-219 -58
        -502 -104 -767 -125 -191 -14 -565 -7 -757 15 -1257 146 -2348 812 -3048 1862
        -355 533 -575 1130 -668 1819 -21 153 -30 666 -15 837 88 983 497 1890 1155
        2566 60 61 105 112 100 112 -5 0 -74 -22 -154 -49z"/>
        <path d="M10161 7918 c-50 -217 -72 -293 -58 -207 l5 37 -46 -47 c-57 -56
        -104 -115 -126 -159 -17 -33 -17 -34 3 -27 12 3 21 4 21 2 0 -3 -96 -44 -212
        -92 -117 -48 -216 -91 -220 -94 -3 -3 101 -71 233 -150 131 -79 239 -146 239
        -148 0 -3 -20 7 -44 21 -25 14 -47 26 -50 26 -7 0 61 -118 90 -157 13 -18 28
        -42 34 -55 6 -16 8 -4 5 42 -4 58 -3 60 4 20 5 -25 17 -151 26 -280 10 -129
        18 -236 19 -237 1 -1 78 64 172 145 166 146 170 148 219 151 52 2 100 12 175
        34 l44 14 -29 11 -30 12 35 -6 c19 -3 129 -29 243 -56 115 -28 210 -48 212
        -46 3 2 -38 105 -90 228 -95 223 -111 266 -76 201 l18 -35 18 60 c12 38 19 95
        19 161 l1 103 -23 -28 -24 -27 23 40 c13 22 67 112 121 199 54 87 97 161 94
        163 -2 3 -62 0 -133 -7 -196 -17 -302 -21 -273 -11 14 5 19 9 12 10 -7 1 -43
        19 -79 41 -64 38 -126 61 -207 75 l-40 7 28 -39 c38 -53 11 -22 -158 175 -76
        89 -139 162 -140 162 -1 0 -26 -105 -55 -232z m592 -215 c-7 -2 -19 -2 -25 0
        -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-263 -946 c0 -2 -12 -14 -27 -28 l-28 -24
        24 28 c23 25 31 32 31 24z"/>
        <path d="M5142 7978 c-34 -151 -92 -379 -86 -334 l6 40 -66 -68 c-37 -37 -75
        -85 -86 -106 -11 -21 -27 -46 -37 -55 -16 -17 -16 -17 7 -10 94 29 13 -9 -224
        -106 -182 -74 -188 -77 -165 -92 13 -8 116 -70 229 -137 113 -68 210 -127 215
        -133 6 -6 -11 2 -37 16 l-46 27 36 -69 c21 -38 47 -80 58 -94 12 -13 26 -33
        32 -43 10 -16 12 -13 13 21 2 42 22 -179 35 -372 4 -62 10 -113 13 -113 3 0
        71 57 151 126 228 198 269 233 232 193 l-33 -35 64 7 c58 7 171 40 185 54 3 3
        -5 5 -18 5 -13 0 -21 3 -17 6 6 6 83 -11 331 -72 77 -19 141 -32 143 -30 3 2
        -32 91 -77 198 -45 106 -84 199 -87 206 -3 7 0 12 7 10 23 -6 42 74 44 190 l3
        113 -24 -28 c-34 -39 -29 -31 101 180 64 104 116 192 116 196 0 4 -57 2 -127
        -5 -176 -16 -337 -24 -288 -15 22 5 32 9 23 10 -10 0 -44 18 -77 40 -36 23
        -93 47 -139 60 -106 29 -117 28 -89 -9 32 -42 -94 98 -185 207 -57 67 -105
        122 -108 123 -3 0 -16 -46 -28 -102z m768 -943 c0 -5 -5 -3 -10 5 -5 8 -10 20
        -10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z"/>
        <path d="M3566 5502 c-50 -220 -70 -294 -59 -213 l6 44 -62 -67 c-58 -63 -121
        -150 -121 -169 0 -4 10 -6 23 -2 50 14 -17 -17 -209 -96 -109 -45 -203 -85
        -207 -89 -5 -4 83 -63 195 -130 198 -120 242 -148 206 -135 -10 4 -18 4 -18 1
        0 -15 55 -114 86 -155 l34 -44 1 39 c1 74 8 18 24 -206 8 -124 18 -240 21
        -258 l5 -32 141 122 c226 197 297 256 255 212 l-37 -40 67 8 c38 4 95 16 128
        26 59 19 59 20 26 27 -18 4 -30 9 -28 11 4 4 278 -59 435 -99 34 -9 52 -10 52
        -4 0 6 -36 95 -80 198 -44 104 -85 201 -90 216 l-10 28 19 -24 19 -24 12 54
        c8 30 15 104 16 164 l4 110 -21 -32 c-12 -18 -23 -33 -26 -33 -2 0 4 15 15 33
        53 87 188 306 209 340 l24 39 -63 -6 c-389 -36 -497 -42 -374 -21 l38 6 -33
        20 c-111 63 -171 86 -267 103 l-34 6 32 -43 c46 -60 5 -15 -153 171 -76 89
        -142 162 -145 162 -4 0 -29 -98 -56 -218z m-166 -888 c0 -2 -9 0 -20 6 -11 6
        -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z"/>
        <path d="M7315 4768 c-2 -7 -26 -110 -53 -228 -28 -118 -51 -202 -51 -185 l-1
        30 -57 -60 c-57 -59 -123 -149 -123 -168 0 -5 12 -6 28 -3 45 10 10 -6 -216
        -99 -168 -70 -210 -91 -200 -100 7 -7 109 -69 226 -139 116 -70 212 -130 212
        -133 0 -3 -16 4 -36 16 -32 19 -63 30 -38 13 6 -4 23 -31 38 -60 15 -29 42
        -73 61 -98 l35 -46 1 49 c2 72 7 32 29 -246 11 -140 21 -255 23 -257 1 -2 78
        62 169 142 92 79 171 143 175 142 18 -4 122 14 192 35 l74 21 -39 12 c-86 26
        -7 11 211 -41 127 -31 239 -58 249 -61 14 -5 17 -2 13 7 -72 163 -187 443
        -184 446 2 2 10 -11 18 -29 l13 -32 18 70 c11 43 17 105 17 164 0 84 -2 93
        -14 75 -73 -104 -47 -55 104 190 60 99 109 181 108 182 -1 1 -101 -7 -222 -18
        -121 -11 -229 -18 -240 -16 -11 3 0 5 25 6 51 1 48 6 -33 55 -61 36 -129 60
        -210 75 -46 8 -47 8 -31 -10 9 -11 14 -19 11 -19 -4 0 -70 74 -148 165 -77 91
        -143 165 -145 165 -3 0 -6 -6 -9 -12z m326 -345 c13 -16 12 -17 -3 -4 -10 7
        -18 15 -18 17 0 8 8 3 21 -13z m-41 -1026 c0 -2 -15 -16 -32 -33 l-33 -29 29
        33 c28 30 36 37 36 29z"/></g></Moon>

        : <Sun xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 1280.000000 1095.000000"><g transform="translate(0.000000,1095.000000) scale(0.100000,-0.100000)"
        fill="orange" stroke="none"><path fill="red" d="M4776 10880 c-104 -38 -257 -103 -340 -143 -83 -41 -162 -78 -176
        -82 -55 -17 -119 -56 -150 -92 -41 -46 -90 -151 -98 -212 -11 -76 -4 -331 11
        -416 9 -44 13 -82 11 -84 -2 -2 -59 11 -126 30 -113 31 -135 34 -263 34 -125
        0 -145 -2 -190 -23 -95 -44 -141 -109 -152 -213 l-6 -61 -57 5 c-69 6 -87 16
        -171 92 -88 82 -114 93 -171 67 -83 -37 -207 -158 -416 -404 l-83 -97 -72 -16
        c-40 -8 -153 -24 -252 -34 -99 -11 -192 -24 -206 -29 -40 -16 -90 -63 -105
        -99 -19 -44 -18 -160 2 -261 10 -48 13 -86 8 -91 -5 -4 -47 -23 -94 -42 -106
        -42 -248 -113 -326 -164 -80 -53 -180 -154 -204 -207 -34 -75 -24 -186 26
        -292 14 -29 16 -40 7 -43 -7 -3 -54 -25 -105 -50 -201 -97 -366 -231 -409
        -330 -30 -71 -50 -200 -55 -363 -3 -85 -7 -173 -10 -196 l-5 -41 -82 -6 c-183
        -13 -300 -96 -354 -251 -25 -72 -25 -309 0 -421 21 -92 22 -95 30 -115 3 -8
        15 -46 28 -85 12 -38 39 -114 60 -168 22 -53 39 -98 39 -100 0 -1 -42 -1 -92
        0 -86 1 -96 -1 -132 -25 -98 -67 -117 -196 -71 -487 5 -37 58 -189 86 -253 42
        -93 103 -193 178 -292 l68 -89 -24 -178 c-36 -278 -36 -290 24 -403 27 -52 83
        -148 124 -213 102 -162 101 -160 175 -362 121 -330 219 -549 264 -590 22 -19
        22 -19 61 3 29 17 40 19 44 10 2 -7 16 -58 30 -113 32 -121 82 -253 131 -346
        43 -81 139 -190 198 -223 55 -32 136 -49 187 -41 l42 7 -9 -58 c-25 -171 29
        -260 211 -348 78 -38 116 -49 285 -80 107 -20 220 -39 252 -43 79 -8 85 -13
        69 -61 -21 -62 -10 -164 28 -253 40 -96 144 -257 246 -379 114 -136 428 -448
        508 -503 37 -26 70 -47 72 -47 2 0 27 -16 56 -35 56 -37 69 -41 69 -25 0 14
        -82 204 -126 292 -36 73 -174 319 -184 328 -19 19 -96 189 -93 207 5 27 62 49
        150 58 74 7 60 22 179 -195 213 -387 324 -503 644 -672 212 -113 549 -258 597
        -258 26 0 12 17 -39 50 -29 19 -65 43 -79 54 -42 34 -78 61 -189 138 -58 40
        -118 85 -135 98 -65 53 -193 187 -210 219 -22 43 -64 267 -65 343 l0 56 48
        -13 c88 -24 257 -90 326 -129 38 -21 93 -62 121 -90 50 -49 53 -54 79 -162 22
        -96 64 -198 108 -269 31 -49 127 -132 183 -159 112 -53 155 -54 445 -16 164
        21 413 -59 581 -188 35 -27 86 -65 112 -85 53 -41 72 -45 81 -21 18 46 -144
        229 -282 319 -120 77 -313 153 -451 176 -36 6 -72 15 -80 19 -37 20 -157 153
        -194 215 -23 39 -47 76 -54 82 -27 29 -55 130 -60 218 l-5 90 143 -146 c79
        -80 166 -163 192 -185 27 -21 54 -44 60 -50 7 -5 48 -34 91 -63 135 -91 222
        -119 476 -151 185 -23 300 -49 368 -84 66 -34 174 -116 289 -221 139 -127 169
        -150 243 -189 198 -104 311 -87 570 84 137 90 243 140 300 140 26 0 102 -16
        171 -35 206 -59 359 -57 558 7 226 71 470 233 424 279 -14 14 -204 -2 -483
        -39 -286 -39 -311 -37 -510 31 -211 73 -254 81 -367 67 -128 -16 -220 -43
        -336 -101 -122 -62 -160 -65 -252 -20 -70 35 -128 89 -200 186 -57 77 -127
        145 -171 168 -16 8 -63 25 -104 37 -152 45 -272 124 -418 275 -99 102 -121
        137 -84 129 9 -2 98 -17 197 -35 277 -47 610 -112 745 -143 66 -16 191 -57
        423 -140 159 -57 285 -80 387 -72 94 7 135 20 326 101 146 62 280 105 330 105
        40 0 502 -165 813 -290 112 -45 214 -80 232 -80 108 0 673 192 770 261 36 26
        37 46 2 53 -128 26 -616 87 -813 101 l-95 7 -165 97 c-227 134 -399 229 -458
        251 -27 10 -88 24 -134 30 -115 16 -212 -2 -466 -84 -217 -70 -312 -91 -375
        -84 -59 7 -724 293 -727 313 -1 10 164 39 540 95 617 92 630 92 840 -7 246
        -116 268 -115 591 30 181 81 249 104 348 116 93 12 135 5 351 -59 156 -46 327
        -108 395 -143 79 -41 153 -41 246 -2 124 53 164 64 224 65 66 0 163 -23 270
        -65 134 -51 137 -52 233 -27 48 12 154 47 235 77 229 85 341 145 323 173 -6
        10 -90 24 -281 47 -189 22 -205 24 -369 35 -83 6 -169 18 -195 27 -72 25 -161
        20 -275 -16 -161 -51 -180 -48 -387 57 -96 49 -208 111 -249 139 -56 39 -91
        54 -138 64 -81 15 -240 6 -347 -21 -344 -85 -332 -83 -490 -84 l-150 -1 -135
        49 c-289 104 -571 222 -578 244 -3 9 41 12 195 12 179 0 729 22 878 35 277 24
        301 28 490 83 l190 56 150 0 c149 1 151 1 215 -31 54 -26 202 -129 220 -153 3
        -3 32 -23 66 -44 77 -47 137 -63 294 -77 301 -27 472 28 580 188 11 17 46 31
        140 58 139 39 425 105 458 105 32 0 38 21 13 41 -63 51 -479 146 -599 136 -53
        -4 -88 -17 -225 -85 -203 -101 -230 -112 -277 -112 -46 0 -214 82 -340 165
        -258 171 -427 202 -707 129 -335 -88 -413 -88 -690 -8 -196 57 -269 120 -305
        264 -13 51 -22 250 -12 250 5 0 45 -22 89 -48 347 -208 658 -294 865 -239 74
        20 221 90 360 172 279 163 480 173 713 33 40 -23 89 -55 110 -70 70 -49 185
        -91 268 -96 108 -6 162 22 297 155 179 178 266 202 511 143 119 -29 139 -31
        187 -21 117 23 338 153 307 181 -16 15 -139 50 -388 111 -49 12 -106 32 -125
        43 -27 15 -53 20 -110 21 -66 0 -84 -4 -152 -37 -42 -20 -109 -58 -150 -86
        -152 -103 -242 -136 -347 -130 -98 6 -156 32 -286 130 -113 85 -179 124 -245
        144 -94 29 -245 11 -400 -47 -167 -62 -228 -81 -465 -140 -217 -55 -248 -60
        -321 -57 -141 7 -249 81 -355 243 -50 78 -58 96 -100 208 -30 81 -28 88 23 68
        35 -13 207 -48 327 -66 260 -38 375 -13 716 155 270 133 336 154 485 154 106
        0 126 -3 254 -42 76 -22 173 -46 216 -53 96 -14 160 1 299 67 176 84 237 99
        316 79 69 -18 126 -50 221 -122 103 -78 156 -108 227 -128 51 -15 61 -15 80
        -2 38 25 239 202 327 288 l85 83 -38 4 c-22 2 -87 -8 -145 -22 -59 -14 -132
        -28 -162 -31 -54 -6 -57 -5 -143 50 -78 50 -145 84 -270 140 -79 35 -232 67
        -341 72 -126 7 -165 0 -361 -64 -149 -48 -203 -58 -303 -58 -57 1 -74 7 -195
        68 -73 37 -161 86 -196 110 -98 65 -103 67 -156 67 -105 0 -189 -33 -401 -160
        -255 -152 -359 -158 -480 -27 -60 65 -174 213 -174 227 0 4 51 10 113 14 483
        29 781 96 967 218 189 123 264 153 407 164 125 9 191 -10 396 -111 223 -111
        306 -133 430 -115 47 6 134 29 194 50 59 21 167 58 238 84 72 25 175 53 230
        62 112 19 129 18 594 -37 139 -17 255 -28 258 -25 22 22 -63 95 -205 174 -201
        113 -348 170 -457 179 -76 6 -155 -12 -455 -102 -80 -24 -174 -49 -210 -55
        -82 -15 -260 -15 -325 0 -60 13 -185 63 -240 94 -184 107 -323 161 -441 172
        -38 4 -208 1 -379 -6 -435 -16 -1039 -28 -1048 -20 -4 3 34 23 85 44 103 42
        454 194 533 230 28 13 115 65 195 115 208 132 288 152 426 110 65 -20 117 -45
        314 -154 99 -54 181 -83 350 -125 178 -43 319 -62 372 -51 60 14 152 53 228
        97 184 105 200 110 368 98 70 -5 190 -8 267 -8 133 0 143 1 203 28 69 32 119
        84 124 131 3 26 -2 31 -42 46 -25 10 -88 30 -140 44 -119 33 -221 76 -352 151
        -93 53 -109 59 -160 59 -44 -1 -69 -8 -120 -35 -166 -89 -171 -91 -273 -102
        -55 -6 -210 -12 -345 -12 -216 -1 -252 1 -300 18 -83 29 -174 76 -293 155
        -206 136 -310 176 -438 169 -94 -6 -162 -36 -289 -129 -125 -91 -196 -121
        -302 -127 -97 -5 -171 6 -298 45 -76 24 -300 126 -300 137 0 2 6 37 14 78 27
        142 73 225 144 259 43 21 50 22 134 10 138 -18 287 -49 351 -72 54 -20 65 -21
        170 -11 61 7 121 13 132 16 11 2 58 12 105 23 59 12 124 18 210 17 147 -1 211
        -19 388 -108 192 -98 280 -117 437 -97 94 13 206 36 240 51 11 5 47 16 80 26
        33 9 67 20 75 24 8 4 63 20 121 35 l106 27 109 -26 c60 -15 118 -31 129 -36
        11 -5 67 -23 125 -41 58 -17 110 -35 115 -39 9 -6 41 -15 130 -37 11 -2 50 -7
        87 -10 74 -6 118 11 118 45 0 53 -302 284 -486 372 -142 68 -211 84 -328 77
        -122 -8 -118 -7 -286 -53 -111 -30 -153 -37 -235 -37 -122 -1 -186 17 -392
        109 -182 82 -247 97 -383 91 -92 -4 -124 -11 -250 -52 -128 -43 -155 -49 -235
        -49 -79 -1 -97 2 -148 27 -36 18 -80 53 -120 95 -207 221 -239 244 -367 258
        -111 12 -300 -33 -485 -116 l-66 -30 20 29 c31 44 185 185 255 236 88 62 200
        113 271 123 95 12 170 -2 362 -68 164 -57 186 -63 283 -67 102 -4 110 -3 265
        42 167 48 275 83 336 109 61 26 99 31 214 30 153 -2 305 -46 525 -153 72 -36
        91 -41 125 -35 21 4 46 10 55 14 374 181 670 360 670 406 0 18 -22 18 -185 -1
        -160 -19 -325 -48 -469 -81 l-108 -26 -102 36 c-55 21 -110 41 -121 46 -30 13
        -271 87 -345 106 -140 36 -302 15 -517 -67 -152 -58 -237 -79 -338 -86 -126
        -8 -184 9 -484 142 -105 47 -177 64 -267 65 -109 0 -180 -27 -317 -119 -140
        -96 -197 -116 -283 -102 -109 17 -235 73 -368 164 -69 47 -73 41 79 128 224
        128 444 217 651 263 107 24 180 20 373 -21 209 -44 350 -50 438 -20 29 10 114
        61 188 114 75 52 162 106 193 121 54 25 66 27 207 27 207 0 306 -29 458 -133
        l69 -47 147 0 c163 1 236 14 406 72 188 66 295 124 295 162 0 11 -7 22 -15 25
        -25 9 -178 24 -315 31 -159 8 -311 30 -379 55 -29 10 -89 45 -134 77 -193 138
        -254 165 -387 170 -52 3 -156 -2 -231 -10 -163 -18 -213 -38 -378 -152 -60
        -41 -135 -87 -165 -100 -126 -56 -269 -53 -435 6 -187 67 -238 81 -318 86
        -103 7 -165 -5 -373 -72 -91 -29 -194 -59 -228 -66 -79 -15 -363 -6 -507 16
        -110 17 -351 63 -375 72 -8 4 -26 8 -40 10 -60 10 -155 41 -155 51 0 20 149
        184 221 241 40 33 103 73 140 91 187 88 485 115 659 60 39 -12 123 -46 187
        -76 244 -113 400 -145 523 -110 77 23 190 80 291 148 160 108 249 149 363 168
        43 8 75 5 155 -11 216 -45 402 4 571 150 116 101 199 221 182 266 -8 20 -28
        19 -257 -10 -239 -31 -364 -32 -493 -5 -146 31 -183 16 -342 -139 -175 -171
        -218 -198 -361 -227 -171 -35 -334 -7 -682 117 -270 96 -366 119 -532 126
        -169 7 -235 -6 -575 -117 -132 -44 -289 -91 -349 -106 -107 -26 -112 -27 -355
        -21 -135 3 -304 13 -376 21 -249 31 -419 58 -446 71 -14 8 -60 46 -102 85 -81
        75 -127 150 -127 206 0 55 27 56 247 12 132 -26 182 -31 308 -32 145 -1 153 0
        250 33 55 19 156 58 225 88 388 170 472 198 554 188 71 -9 219 -45 230 -56 6
        -5 17 -9 26 -9 18 0 150 -54 227 -94 88 -44 245 -103 333 -124 185 -45 270
        -40 611 38 600 137 908 227 896 263 -5 17 -446 68 -850 97 -129 10 -145 13
        -240 53 -56 24 -118 49 -137 56 -19 7 -44 17 -55 22 -11 4 -51 18 -90 29 -38
        12 -80 25 -93 31 -60 24 -352 92 -447 104 -17 2 -68 9 -115 14 -125 16 -409
        14 -517 -4 -111 -18 -193 -48 -327 -119 -133 -70 -170 -90 -176 -96 -32 -32
        -218 -105 -320 -126 -68 -13 -94 -14 -157 -5 -84 13 -193 53 -298 111 -85 47
        -203 95 -270 110 -38 9 -55 8 -73 -2 -30 -15 -183 -188 -406 -457 l-170 -204
        -27 31 c-16 17 -35 55 -43 83 -20 66 -21 216 -1 288 54 206 227 356 495 433
        27 7 101 12 185 12 122 0 155 -4 250 -29 94 -25 129 -29 240 -29 102 0 141 4
        180 18 48 18 124 65 125 77 0 3 -66 14 -147 23 -176 21 -476 67 -623 96 -58
        12 -114 23 -125 24 -11 2 -40 9 -65 15 -25 6 -52 10 -60 10 -8 0 -100 -31
        -204 -69z m242 -1376 c665 -64 1257 -275 1795 -640 589 -400 1082 -952 1386
        -1554 78 -154 105 -216 181 -410 17 -45 48 -141 88 -275 52 -177 99 -418 129
        -665 24 -201 24 -712 0 -925 -59 -519 -183 -941 -407 -1380 -383 -750 -1090
        -1443 -1843 -1805 -413 -199 -786 -306 -1277 -367 -114 -14 -219 -17 -485 -17
        -298 0 -361 3 -510 23 -378 50 -688 130 -995 255 -157 64 -448 207 -454 223
        -9 21 102 101 184 132 41 16 102 34 134 40 127 23 530 8 862 -33 213 -26 234
        -28 234 -17 0 14 -191 105 -309 146 -167 57 -407 110 -666 146 -105 14 -697
        27 -895 19 -163 -7 -177 -4 -223 38 -46 44 -22 104 57 144 85 43 290 61 382
        33 63 -19 135 -19 180 0 20 8 75 40 123 70 116 74 189 99 261 91 58 -7 203
        -40 330 -75 122 -34 261 -68 325 -81 33 -6 68 -14 78 -16 59 -17 -22 77 -246
        285 -263 244 -354 311 -422 311 -60 0 -176 -33 -370 -105 -230 -86 -284 -94
        -417 -66 -108 22 -398 64 -733 106 -189 23 -201 26 -223 51 -29 33 -23 56 32
        112 81 85 196 162 242 162 13 0 59 -20 102 -44 95 -55 213 -92 337 -108 118
        -14 277 -1 495 42 85 16 188 34 229 40 41 6 77 13 80 15 8 9 -37 49 -92 83
        -119 72 -290 119 -540 147 -77 9 -149 20 -160 24 -12 5 -107 74 -212 155 -104
        80 -222 162 -260 182 -119 59 -173 56 -435 -23 -92 -27 -93 -27 -164 -44 -47
        -11 -51 -10 -68 11 -33 40 -16 93 46 147 85 75 211 84 536 37 244 -35 478 -39
        607 -11 101 21 247 63 288 81 17 8 41 17 55 21 48 13 385 184 419 213 82 69
        -17 76 -374 27 -60 -8 -188 -20 -284 -26 -273 -17 -366 4 -531 123 -97 69
        -133 90 -206 118 -56 22 -74 23 -417 28 -349 4 -358 5 -372 25 -8 12 -15 31
        -15 43 0 38 99 68 324 99 135 18 216 46 308 104 96 60 188 99 266 112 85 14
        147 2 391 -76 241 -78 322 -96 446 -102 201 -9 411 39 610 141 108 55 189 124
        200 169 13 52 -6 54 -112 12 -183 -73 -238 -86 -371 -92 -190 -9 -272 20 -637
        224 -233 130 -285 156 -370 183 -99 31 -201 30 -340 -5 -158 -39 -299 -45
        -397 -15 -240 73 -368 187 -368 327 0 73 18 102 97 162 93 70 158 94 258 94
        100 1 155 -23 335 -143 199 -133 211 -137 435 -151 220 -13 395 -8 448 15 20
        8 37 19 37 24 0 17 -67 69 -152 120 -46 27 -194 103 -330 169 -153 76 -262
        135 -287 159 -41 36 -67 83 -159 286 -68 148 -152 215 -325 259 -49 12 -97 29
        -107 38 -19 16 -19 17 -1 57 27 58 67 75 686 284 424 143 526 181 676 251 214
        101 293 101 714 0 412 -98 486 -92 670 55 201 162 276 195 505 229 96 14 253
        31 348 37 195 14 195 15 37 67 -140 46 -245 63 -425 68 -144 5 -179 3 -275
        -17 -146 -30 -339 -83 -414 -114 -34 -15 -80 -26 -105 -26 -55 0 -257 40 -436
        87 -384 100 -479 123 -525 123 -27 0 -147 -9 -265 -20 -129 -12 -296 -20 -418
        -20 l-203 0 22 31 c83 117 210 172 461 200 121 13 451 2 806 -28 233 -19 276
        -15 472 44 242 72 560 195 560 215 0 11 -40 6 -285 -39 -104 -18 -242 -36
        -305 -39 -111 -6 -120 -5 -240 30 -111 32 -321 103 -450 151 -34 13 -98 19
        -255 25 -241 10 -215 7 -215 20 0 37 135 54 560 70 396 15 580 28 685 50 50
        11 144 29 210 40 l120 21 165 -41 c208 -52 180 -46 304 -65 58 -9 112 -15 118
        -12 29 9 -341 219 -487 276 -169 66 -203 70 -530 69 -291 -2 -455 10 -491 36
        -13 10 -1 20 69 59 l84 47 179 -9 c163 -8 190 -12 299 -45 264 -80 260 -80
        505 -16 197 51 358 86 435 95 49 5 88 0 199 -25 76 -17 177 -45 224 -62 123
        -42 132 -44 132 -23 0 38 -176 172 -303 230 -117 54 -167 61 -325 46 -75 -7
        -182 -22 -237 -32 -128 -24 -239 -24 -390 1 -127 20 -185 36 -185 51 0 4 24
        16 53 25 76 24 321 35 714 32 188 -2 345 0 349 4 15 16 -31 48 -113 78 -100
        36 -127 49 -118 58 23 24 589 21 843 -4z"/>
        <path d="M2675 7110 c-33 -4 -89 -15 -125 -25 -36 -9 -69 -18 -75 -20 -5 -1
        -23 -7 -38 -13 -16 -7 -32 -12 -36 -12 -5 0 -50 -21 -102 -46 -202 -99 -358
        -222 -409 -324 -41 -82 -44 -99 -24 -121 51 -57 181 9 412 210 103 89 218 154
        341 191 144 44 244 12 426 -137 192 -156 206 -163 445 -208 47 -9 96 -19 110
        -22 14 -4 36 -7 50 -8 133 -11 512 -370 609 -575 25 -53 26 -64 29 -260 l3
        -205 -36 -100 c-66 -180 -69 -192 -56 -251 18 -77 53 -104 135 -104 53 0 69 4
        102 28 21 16 45 35 51 44 23 27 26 101 9 184 -9 43 -21 165 -27 269 -9 159
        -30 399 -43 480 -6 34 -43 139 -64 181 -20 38 -117 127 -256 233 -82 63 -209
        127 -531 270 -84 37 -57 22 -267 157 -190 122 -262 161 -317 169 -196 28 -207
        28 -316 15z"/>
        <path d="M6600 7037 c-3 -3 -27 -7 -55 -10 -61 -6 -125 -21 -183 -41 -23 -8
        -46 -16 -50 -17 -16 -4 -39 -12 -69 -25 -17 -8 -38 -14 -46 -14 -9 0 -17 -3
        -19 -8 -7 -17 -189 -84 -292 -108 -201 -45 -241 -55 -273 -70 -18 -8 -48 -20
        -65 -28 -34 -14 -62 -26 -159 -69 -75 -33 -275 -143 -317 -174 -19 -14 -42
        -44 -52 -67 -9 -22 -27 -61 -38 -86 -12 -25 -33 -77 -47 -116 l-25 -71 0 -489
        c0 -278 5 -506 10 -529 5 -22 14 -68 20 -103 6 -35 14 -71 19 -80 51 -106 66
        -133 87 -153 20 -18 29 -21 42 -13 16 10 17 48 14 500 -4 503 -4 495 38 809
        14 106 56 188 136 268 75 76 166 131 259 158 39 11 79 25 90 29 32 15 260 80
        279 80 9 0 24 4 34 9 9 5 71 22 137 36 165 37 161 35 279 110 58 36 125 74
        148 85 59 25 162 43 212 35 89 -14 207 -57 290 -108 110 -67 135 -88 287 -232
        69 -66 142 -129 162 -140 36 -19 37 -19 64 1 36 26 62 79 70 142 5 47 3 53
        -24 79 -16 15 -78 62 -138 105 -61 42 -139 101 -175 132 -83 73 -198 128 -330
        158 -48 11 -312 23 -320 15z"/>
        <path d="M6129 6456 c-2 -2 -26 -6 -54 -9 -162 -16 -364 -129 -500 -279 -71
        -79 -178 -287 -179 -350 l-1 -43 65 -8 c36 -4 128 -5 205 -2 197 8 216 7 313
        -21 191 -57 219 -62 297 -62 44 0 103 4 130 9 28 5 64 11 80 13 98 12 254 67
        415 144 100 49 131 76 275 236 39 43 72 79 74 82 2 2 -4 4 -15 4 -11 0 -53
        -20 -94 -45 -75 -45 -116 -55 -138 -33 -8 8 -4 20 17 47 40 51 77 119 69 126
        -4 4 -19 0 -35 -8 -34 -19 -78 -34 -120 -42 -33 -7 -103 10 -103 24 0 4 18 36
        40 69 22 34 36 62 31 62 -5 0 -30 -9 -55 -20 -55 -23 -136 -34 -155 -21 -11 7
        -11 15 -3 40 13 36 12 36 -71 20 -51 -11 -61 -9 -120 14 -86 34 -201 57 -290
        57 -40 0 -76 -2 -78 -4z m-14 -131 c-84 -62 -125 -99 -150 -136 -26 -36 -31
        -54 -33 -119 -5 -91 16 -145 81 -210 29 -30 36 -41 22 -37 -188 52 -342 78
        -406 70 l-42 -6 5 50 c10 107 82 203 229 303 115 79 166 99 249 99 60 0 63 -1
        45 -14z m614 -145 c150 -101 221 -169 198 -188 -6 -6 -34 -19 -62 -30 -27 -11
        -99 -41 -160 -67 -179 -76 -269 -98 -172 -42 60 36 86 73 98 146 13 74 -3 132
        -59 205 -74 98 -72 90 -28 82 24 -5 93 -44 185 -106z m-309 80 c14 -26 18 -92
        5 -96 -5 -2 -30 14 -55 35 -45 39 -45 39 -26 60 24 27 62 27 76 1z m-161 -322
        c-21 -57 -34 -77 -50 -78 -9 0 -49 40 -49 50 0 11 111 102 117 96 3 -2 -6 -33
        -18 -68z"/>
        <path d="M2850 6404 c-86 -29 -114 -34 -155 -30 -27 4 -59 7 -70 9 -21 2 -22
        -7 -9 -52 7 -22 6 -23 -42 -18 -62 5 -89 12 -132 33 -18 8 -36 13 -39 10 -3
        -3 11 -31 31 -62 21 -31 35 -62 32 -69 -13 -36 -128 -30 -209 10 -27 14 -53
        25 -58 25 -14 0 24 -70 70 -128 39 -48 40 -52 22 -62 -31 -16 -44 -12 -109 31
        -58 39 -127 65 -136 50 -5 -8 158 -161 244 -228 92 -72 203 -137 285 -167 39
        -15 79 -31 90 -36 54 -26 187 -47 310 -49 113 -2 142 1 225 24 245 68 245 68
        395 61 77 -3 174 -9 215 -12 67 -5 77 -4 94 14 16 18 16 25 6 59 -34 104 -150
        292 -239 387 -107 112 -267 199 -415 225 -33 6 -114 11 -180 11 -111 -1 -130
        -4 -226 -36z m554 -133 c69 -33 105 -59 166 -119 87 -87 121 -149 128 -230 l5
        -55 -41 6 c-41 7 -278 -24 -340 -44 -47 -15 -50 -5 -12 37 40 46 57 85 65 150
        13 98 -35 187 -139 259 -31 21 -56 41 -56 44 0 4 30 4 68 1 52 -4 87 -15 156
        -49z m-649 -43 c-90 -100 -114 -163 -95 -253 14 -67 46 -108 112 -141 27 -14
        46 -29 43 -34 -13 -22 -71 -9 -123 26 -49 33 -259 124 -286 124 -7 0 -20 6
        -30 13 -16 12 -15 17 23 64 62 80 323 253 379 253 22 0 20 -4 -23 -52z m201
        19 l27 -24 -54 -43 -54 -43 -3 42 c-3 46 18 91 43 91 7 0 26 -11 41 -23z m135
        -298 l61 -51 -26 -27 c-21 -21 -30 -24 -44 -15 -20 13 -73 144 -58 144 3 0 33
        -23 67 -51z"/>
        <path d="M4120 4632 c-40 -20 -99 -101 -125 -174 -14 -40 -16 -68 -12 -146 3
        -53 8 -106 10 -117 3 -13 -17 -44 -59 -94 -77 -90 -160 -209 -151 -217 3 -4
        28 9 54 29 96 70 198 114 302 131 l74 12 -30 34 c-66 75 -83 110 -83 166 0 62
        17 148 36 186 8 15 35 43 61 63 25 19 53 45 61 56 21 31 -7 59 -83 83 -11 3
        -36 -2 -55 -12z"/>
        <path d="M4300 4412 c-49 -50 -65 -163 -34 -242 18 -46 17 -45 74 -25 57 20
        95 19 159 -6 51 -19 181 -38 181 -26 0 3 -25 19 -56 37 -81 46 -147 111 -207
        206 -58 93 -72 100 -117 56z"/>
        <path d="M5077 4408 c-13 -18 -39 -59 -58 -91 -40 -69 -104 -126 -176 -158
        -29 -12 -50 -26 -47 -31 11 -17 117 -8 188 17 72 25 119 25 178 0 31 -13 53
        39 52 125 -1 87 -19 132 -64 155 -40 21 -46 19 -73 -17z"/>
        <path d="M5390 4191 c0 -16 -7 -37 -16 -45 -33 -33 -80 -64 -116 -76 -21 -6
        -38 -15 -38 -19 0 -4 31 -12 70 -19 95 -16 185 -54 280 -118 44 -29 80 -49 80
        -43 0 42 -220 349 -250 349 -6 0 -10 -13 -10 -29z"/>
        <path d="M4678 4013 c-47 -51 -61 -92 -61 -173 1 -82 13 -123 45 -157 25 -26
        48 -29 86 -9 56 29 102 103 102 164 0 34 -43 102 -102 160 l-44 42 -26 -27z"/>
        <path d="M4325 3636 c-251 -69 -799 -268 -792 -289 4 -12 153 -61 254 -82 124
        -26 209 -20 374 25 l146 40 213 -34 214 -35 215 35 214 35 131 -38 c160 -46
        262 -50 396 -16 47 12 117 29 155 38 73 17 104 30 94 40 -9 8 -561 195 -708
        239 -188 56 -199 57 -311 4 -52 -24 -114 -56 -137 -71 -24 -15 -47 -27 -53
        -27 -6 0 -69 38 -140 85 -71 47 -133 85 -137 84 -4 0 -62 -15 -128 -33z"/>
        <path d="M4287 3002 c-10 -10 -17 -23 -17 -29 0 -6 27 -36 60 -66 33 -31 60
        -63 60 -72 0 -19 -78 -183 -115 -243 -22 -36 -24 -43 -11 -48 32 -12 84 8 186
        71 148 92 259 125 420 125 124 0 178 -14 312 -81 65 -33 120 -59 124 -59 3 0
        -8 24 -25 53 -65 114 -63 172 10 283 23 36 39 67 37 70 -3 3 -50 -6 -104 -20
        -196 -50 -374 -79 -494 -80 -109 -1 -121 1 -224 38 -61 21 -130 47 -154 57
        -53 23 -45 23 -65 1z"/></g></Sun>}
    </Button>
  );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;