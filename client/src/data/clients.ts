export type Client = {
    client_id: string
    first_name: string
    last_name: string
    visits: number
    version_code: string
}

export const ClientService = {
    getData(): Client[] {
        return [
            {
              client_id: "12345678",
              first_name: "John",
              last_name: "Doe",
              visits: 5,
              version_code: "AB"
            },
            {
              client_id: "87654321",
              first_name: "Jane",
              last_name: "Smith",
              visits: 10,
              version_code: "CD"
            },
            {
              client_id: "98765432",
              first_name: "Michael",
              last_name: "Johnson",
              visits: 3,
              version_code: "EF"
            },
            {
              client_id: "23456789",
              first_name: "Emily",
              last_name: "Davis",
              visits: 7,
              version_code: "GH"
            },
            {
              client_id: "34567890",
              first_name: "David",
              last_name: "Brown",
              visits: 2,
              version_code: "IJ"
            },
            {
              client_id: "45678901",
              first_name: "Olivia",
              last_name: "Taylor",
              visits: 4,
              version_code: "KL"
            },
            {
              client_id: "56789012",
              first_name: "Daniel",
              last_name: "Anderson",
              visits: 9,
              version_code: "MN"
            },
            {
              client_id: "67890123",
              first_name: "Sophia",
              last_name: "Wilson",
              visits: 6,
              version_code: "OP"
            },
            {
              client_id: "78901234",
              first_name: "James",
              last_name: "Thomas",
              visits: 8,
              version_code: "QR"
            },
            {
              client_id: "89012345",
              first_name: "Emma",
              last_name: "Lee",
              visits: 12,
              version_code: "ST"
            },
            {
              client_id: "90123456",
              first_name: "Liam",
              last_name: "Walker",
              visits: 3,
              version_code: "UV"
            },
            {
              client_id: "34561278",
              first_name: "Ava",
              last_name: "Miller",
              visits: 5,
              version_code: "WX"
            },
            {
              client_id: "56789341",
              first_name: "Noah",
              last_name: "Garcia",
              visits: 7,
              version_code: "YZ"
            },
            {
              client_id: "78912365",
              first_name: "Isabella",
              last_name: "Harris",
              visits: 10,
              version_code: "AB"
            },
            {
              client_id: "32165879",
              first_name: "Mason",
              last_name: "Martinez",
              visits: 2,
              version_code: "CD"
            },
            {
              client_id: "65498712",
              first_name: "Sophia",
              last_name: "Young",
              visits: 6,
              version_code: "EF"
            },
            {
              client_id: "87652143",
              first_name: "Jacob",
              last_name: "Clark",
              visits: 4,
              version_code: "GH"
            },
            {
              client_id: "98765432",
              first_name: "Charlotte",
              last_name: "Lewis",
              visits: 9,
              version_code: "IJ"
            },
            {
              client_id: "21436587",
              first_name: "Ethan",
              last_name: "Allen",
              visits: 8,
              version_code: "KL"
            },
            {
              client_id: "43659872",
              first_name: "Amelia",
              last_name: "Moore",
              visits: 3,
              version_code: "MN"
            },
            {
              client_id: "65872143",
              first_name: "Lucas",
              last_name: "Turner",
              visits: 7,
              version_code: "OP"
            },
            {
              client_id: "87963215",
              first_name: "Mia",
              last_name: "Jackson",
              visits: 5,
              version_code: "QR"
            },
            {
              client_id: "32154789",
              first_name: "Aiden",
              last_name: "White",
              visits: 11,
              version_code: "ST"
            },
            {
              client_id: "54321698",
              first_name: "Harper",
              last_name: "Hall",
              visits: 4,
              version_code: "UV"
            },
            {
              client_id: "76543218",
              first_name: "Evelyn",
              last_name: "Scott",
              visits: 9,
              version_code: "WX"
            }
          ]
    },

    getClientData() {
        return Promise.resolve(this.getData())
    }
};