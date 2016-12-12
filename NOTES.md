NOTES
JavaScript: Roadtrip

ORDER OF OPERATION
  PEMDAS
  Modulus (%) is contained within the "M" of PEMDAS along with multiplication
  Example: 4 + (8 % (3 + 1)) = 4 + (8 % 4) = 4 + 0 = 4

STRINGS
 Special Characters
  \t advances to the next tab stop
  Example: "Flight #:\t921\t\tSeat:\t21C"
  Result: Flight #: 921   Seat: 21C

 Double Quotation Marks within Strings
  Use a backslash before the double quotation mark (e.g. \")
  Example: "Login Password:\t\t\"C3POR2D2""
  Result: Login Password:   "C3POR2D2"

  Backslash within a Strings
    Use a backslash before the backslash, or a double backslash (e.g. \\)
    Example: "Origin\\Destination:\tOrlando(MCO)\\London(LHR)"
    Result: "Origin\Destination:  Orlando(MCO)\London(LHR)"

  New Line (\n)
    Example: "Departure:\t09:55A\nArrival:\t14:55P"
    Result: "Departure: 09:55A
            Arrival:    14:55P"

  String Length Property (.length)
  Example: "antidisestablishmentarianism".length
  Result: in console.log would be 28
  NOTE: .length counts spaces and non-alpha characters too

  Characters within Strings
    Each position in a string has a numbered index begining with 0

  charAt()
    Retrieves the character at a specific index numbered
    Example: var sentence = "antidisestablishmentarianism is fun to say!";
              sentence.charAt(11);
    Result: "b"

WHILE LOOPS
  
