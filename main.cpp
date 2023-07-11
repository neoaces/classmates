#include <vector>
#include <iostream>
int main() {
// Odd numbered =
    int c, input; // number of columns
    int a = 0;
    std::cin >> c;

    std::vector<int> first_row;
    std::vector<int> second_row;

    for (int i = 0; i < c; i++) {
        std::cin >> input;
        first_row.push_back(input);
    }

    for (int i = 0; i < c; i++) {
        std::cin >> input;
        second_row.push_back(input);
    }

    // Check first row:
    for (int i = 0; i < c; i++) {
        if (i == 0 && first_row.at(0) == 1) { // If the first element is defined
            a += 3;
        }

        else if (first_row.at(i)) {
            if (first_row.at(i-1)) {
                a += 2;
            } else {
                a += 3;
            }
        }
    }

    // Check second row:
    for (int i = 0; i < c; i++) {
        if (i == 0 && second_row.at(i)) {
            if (first_row.at(i)) {
                a += 2;
            } else {
                a += 3;
            }
        }

        else if (i % 2 == 0 && second_row.at(i)) { // If even, pointed up
            if (second_row.at(i - 1)) {
                a += 2;
            } else {
                a += 3;
            }
        }
        
        else if (i % 2 == 0 && second_row.at(i)) { // If odd, pointed down
            if (second_row.at(i - 1)) {
                if (first_row.at(i)) {
                    a += 1;
                } else {
                    a += 2;
                }
            } else {
                a += 3;
            }

        }
    }


    std::cout << a;
    // for (int *row : state) {
    //     for ()
    // }

    return 0;
}