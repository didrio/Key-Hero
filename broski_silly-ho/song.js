const song = {
  name: "sillyho",
  formatted: "Broski - Silly Ho",
  tempo: 174,
  length: 178000,
  audioSource: "../audio/sillyho.mp3",
  // Each number represents a 16th note
  keysHard: [
    [145, 161, 201, 225, 265, 289, 353, 385, 393, 417, 457, 481, 513, 521, 545, 577, 609, 625, 641, 673, 705, 737, 753, 769, 801, 833, 865, 897, 929, 937, 945, 953, 961, 969, 977, 985, 993, 1001, 1009, 1017, 1025, 1029, 1033, 1037, 1057, 2065, 2073, 2097, 2129, 2145, 2161, 2225, 2257, 2273, 2289, 2321, 2337, 2377, 2401, 2433, 2441, 2465, 2505, 2529, 2569, 2589, 2593, 2625, 2657, 2673, 2689, 2721, 2753, 2785, 2801, 2817, 2849, 2881, 2913, 2929, 2945, 2961, 2977, 2985, 2993, 3001, 3009, 3017, 3025, 3033, 3041, 3049, 3057, 3065, 3073, 3077, 3081, 3085, 3089, 3093, 3105],
    [49, 81, 113, 145, 153, 177, 197, 209, 241, 261, 273, 305, 369, 389, 401, 433, 453, 465, 497, 517, 529, 537, 809, 817, 825, 841, 849, 857, 873, 881, 889, 905, 913, 921, 929, 945, 961, 977, 997, 1005, 1013, 1021, 1025, 1029, 1033, 1037, 1073, 2057, 2065, 2113, 2177, 2185, 2193, 2241, 2305, 2313, 2329, 2353, 2373, 2385, 2417, 2437, 2449, 2481, 2501, 2513, 2545, 2565, 2577, 2585, 2857, 2865, 2873, 2889, 2897, 2905, 2921, 2937, 2953, 2961, 2969, 2977, 2993, 3009, 3025, 3045, 3053, 3061, 3069, 3073, 3077, 3081, 3085, 3089, 3093, 3097, 3101],
    [129, 137, 185, 193, 217, 249, 257, 313, 377, 425, 441, 449, 473, 505, 1125, 1129, 1133, 1149, 1153, 1165, 1169, 1177, 1181, 1253, 1257, 1261, 1277, 1281, 1293, 1301, 1305, 1309, 1381, 1385, 1389, 1405, 1409, 1421, 1425, 1433, 1437, 1509, 1513, 1517, 1525, 1533, 1537, 1661, 1665, 1677, 1725, 1729, 1741, 1829, 1833, 1837, 1957, 1961, 1965, 1981, 1985, 1997, 2021, 2025, 2029, 2041, 2049, 2057, 2081, 2137, 2153, 2169, 2209, 2265, 2281, 2297, 2361, 2369, 2393, 2425, 2457, 2489, 2497, 2521, 2553, 2561, 3173, 3177, 3181, 3189, 3197, 3201, 3225, 3229, 3301, 3305, 3309, 3325, 3329, 3341, 3349, 3353, 3357, 3429, 3433, 3437, 3453, 3457, 3469, 3557, 3561, 3565, 3581, 3585, 3597, 3605, 3609, 3613, 3685, 3689, 3693, 3709, 3713, 3725, 3737, 3741, 3773, 3777, 3813, 3817, 3821, 3837, 3841, 3853, 3861, 3865, 3869, 3941, 3945, 3949, 3965, 3969, 3981, 3993, 3997, 4069, 4073, 4077, 4093, 4097, 4109],
    [281, 577, 641, 705, 769, 833, 897, 1057, 1085, 1089, 1101, 1105, 1113, 1117, 1125, 1129, 1133, 1149, 1153, 1165, 1169, 1177, 1181, 1253, 1257, 1261, 1277, 1281, 1293, 1317, 1321, 1325, 1357, 1381, 1385, 1389, 1405, 1409, 1421, 1425, 1433, 1437, 1445, 1449, 1453, 1469, 1473, 1485, 1509, 1513, 1517, 1525, 1533, 1537, 1613, 1637, 1641, 1645, 1661, 1665, 1677, 1701, 1705, 1709, 1725, 1729, 1741, 1745, 1749, 1753, 1757, 1765, 1769, 1773, 1789, 1793, 1805, 1829, 1833, 1837, 1853, 1857, 1869, 1893, 1897, 1901, 1917, 1921, 1933, 1937, 1945, 1949, 2005, 2009, 2013, 2021, 2025, 2029, 2041, 2049, 2105, 2177, 2233, 2305, 2625, 2689, 2753, 2817, 2881, 2945, 3109, 3113, 3117, 3133, 3137, 3149, 3161, 3165, 3173, 3177, 3181, 3189, 3197, 3201, 3225, 3229, 3277, 3285, 3289, 3293, 3301, 3305, 3309, 3325, 3329, 3341, 3365, 3369, 3373, 3389, 3393, 3405, 3417, 3421, 3429, 3433, 3437, 3453, 3457, 3469, 3493, 3497, 3501, 3509, 3517, 3521, 3533, 3541, 3545, 3549, 3557, 3561, 3565, 3581, 3585, 3597, 3617, 3621, 3625, 3629, 3633, 3637, 3641, 3645, 3649, 3653, 3657, 3661, 3665, 3669, 3673, 3677, 3685, 3689, 3693, 3709, 3713, 3725, 3737, 3741, 3749, 3753, 3757, 3789, 3797, 3801, 3805, 3813, 3817, 3821, 3837, 3841, 3853, 3877, 3881, 3885, 3901, 3905, 3917, 3929, 3933, 3941, 3945, 3949, 3965, 3969, 3981, 3993, 3997, 4005, 4009, 4013, 4029, 4033, 4045, 4053, 4057, 4061, 4069, 4073, 4077, 4093, 4097, 4109],
    [609, 737, 865, 1085, 1089, 1101, 1105, 1113, 1117, 1189, 1193, 1197, 1205, 1213, 1217, 1229, 1237, 1241, 1245, 1301, 1305, 1309, 1317, 1321, 1325, 1341, 1345, 1357, 1369, 1373, 1445, 1449, 1453, 1493, 1497, 1501, 1573, 1577, 1581, 1597, 1601, 1613, 1625, 1629, 1637, 1641, 1645, 1701, 1705, 1709, 1745, 1749, 1753, 1757, 1813, 1817, 1821, 1853, 1857, 1869, 1881, 1885, 1945, 1949, 1957, 1961, 1965, 1981, 1985, 1997, 2005, 2009, 2013, 2121, 2193, 2249, 2321, 2657, 2785, 2913, 3109, 3113, 3117, 3133, 3137, 3149, 3161, 3165, 3237, 3241, 3245, 3261, 3265, 3349, 3353, 3357, 3365, 3369, 3373, 3389, 3393, 3405, 3417, 3421, 3493, 3497, 3501, 3509, 3517, 3521, 3605, 3609, 3613, 3789, 3797, 3801, 3805, 3861, 3865, 3869, 3877, 3881, 3885, 3901, 3905, 3917, 3929, 3933, 4045, 4053, 4057, 4061],
    [545, 625, 673, 753, 801, 881, 1189, 1193, 1197, 1205, 1213, 1217, 1229, 1237, 1241, 1245, 1341, 1345, 1369, 1373, 1469, 1473, 1485, 1493, 1497, 1501, 1573, 1577, 1581, 1597, 1601, 1625, 1629, 1765, 1769, 1773, 1789, 1793, 1805, 1813, 1817, 1821, 1881, 1885, 1893, 1897, 1901, 1917, 1921, 1933, 1937, 2089, 2185, 2217, 2313, 2593, 2673, 2721, 2801, 2849, 2929, 3237, 3241, 3245, 3261, 3265, 3277, 3285, 3289, 3293, 3533, 3541, 3545, 3549, 3617, 3621, 3625, 3629, 3633, 3637, 3641, 3645, 3649, 3653, 3657, 3661, 3665, 3669, 3673, 3677, 3749, 3753, 3757, 3773, 3777, 4005, 4009, 4013, 4029, 4033]],
  keysEasy: [
    [145, 161, 201, 225, 265, 289, 353, 385, 393, 417, 457, 481, 513, 521, 545, 577, 609, 641, 673, 705, 737, 769, 801, 833, 865, 897, 929, 945, 961, 977, 993, 1001, 1009, 1017, 1025, 1033, 1057, 2065, 2097, 2129, 2145, 2161, 2225, 2257, 2273, 2289, 2337, 2377, 2401, 2433, 2441, 2465, 2505, 2529, 2569, 2593, 2625, 2657, 2689, 2721, 2753, 2785, 2817, 2849, 2881, 2913, 2945, 2961, 2977, 2993, 3009, 3025, 3041, 3049, 3057, 3065, 3073, 3081, 3089, 3105],
    [49, 81, 113, 153, 177, 209, 241, 273, 305, 369, 401, 433, 465, 497, 529, 537, 929, 945, 961, 977, 993, 1001, 1009, 1017, 1025, 1033, 1073, 2065, 2113, 2241, 2329, 2353, 2385, 2417, 2449, 2481, 2513, 2545, 2577, 2585, 2961, 2977, 2993, 3009, 3025, 3041, 3049, 3057, 3065, 3073, 3081, 3089, 3097],
    [1125, 1149, 1165, 1177, 1253, 1277, 1293, 1301, 1381, 1405, 1421, 1433, 1509, 1525, 1533, 1661, 1677, 1725, 1741, 1829, 1957, 1981, 1997, 2021, 2041, 2049, 2081, 2209, 3173, 3189, 3197, 3225, 3301, 3325, 3341, 3349, 3429, 3453, 3469, 3557, 3581, 3597, 3605, 3685, 3709, 3725, 3737, 3773, 3813, 3837, 3853, 3861, 3941, 3965, 3981, 3993, 4069, 4093, 4109],
    [281, 577, 641, 705, 769, 833, 897, 1057, 1085, 1101, 1113, 1125, 1149, 1165, 1177, 1253, 1277, 1293, 1317, 1357, 1381, 1405, 1421, 1433, 1445, 1469, 1485, 1509, 1525, 1533, 1613, 1637, 1661, 1677, 1701, 1725, 1741, 1745, 1765, 1789, 1805, 1829, 1853, 1869, 1893, 1917, 1933, 1945, 2005, 2021, 2041, 2049, 2177, 2305, 2625, 2689, 2753, 2817, 2881, 2945, 3109, 3133, 3149, 3161, 3173, 3189, 3197, 3225, 3277, 3285, 3301, 3325, 3341, 3365, 3389, 3405, 3417, 3429, 3453, 3469, 3493, 3509, 3517, 3533, 3541, 3557, 3581, 3597, 3617, 3625, 3633, 3641, 3649, 3657, 3665, 3673, 3685, 3709, 3725, 3737, 3749, 3789, 3797, 3813, 3837, 3853, 3877, 3901, 3917, 3929, 3941, 3965, 3981, 3993, 4005, 4029, 4045, 4053, 4069, 4093, 4109],
    [609, 737, 865, 1085, 1101, 1113, 1189, 1205, 1213, 1229, 1237, 1301, 1317, 1341, 1357, 1369, 1445, 1493, 1573, 1597, 1613, 1625, 1637, 1701, 1745, 1813, 1853, 1869, 1881, 1945, 1957, 1981, 1997, 2005, 2193, 2321, 2657, 2785, 2913, 3109, 3133, 3149, 3161, 3237, 3261, 3349, 3365, 3389, 3405, 3417, 3493, 3509, 3517, 3605, 3789, 3797, 3861, 3877, 3901, 3917, 3929, 4045, 4053],
    [545, 673, 801, 1189, 1205, 1213, 1229, 1237, 1341, 1369, 1469, 1485, 1493, 1573, 1597, 1625, 1765, 1789, 1805, 1813, 1881, 1893, 1917, 1933, 2185, 2313, 2593, 2721, 2849, 3237, 3261, 3277, 3285, 3533, 3541, 3617, 3625, 3633, 3641, 3649, 3657, 3665, 3673, 3749, 3773, 4005, 4029]]
};
