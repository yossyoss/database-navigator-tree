export const treeData = [
  {
    key: "0",
    label: "PostgresSQL - test",
    type: "connections",
    nodes: [
      {
        key: "0-0",
        label: "sandbox",
        type: "db",
        nodes: [
          {
            key: "0-1-0",
            label: "Schemas",
            type: "schemas",
            nodes: [
              {
                key: "0-1-1",
                label: "public",
                type: "schema",
                nodes: [
                  {
                    key: "0-1-1-0",
                    label: "Tables",
                    type: "tables",
                    nodes: [
                      {
                        key: "0-1-1-1-0",
                        label: "Layers",
                        type: "column",
                      },
                      {
                        key: "0-1-1-1-1",
                        label: "New table",
                        type: "column",
                      },
                      {
                        key: "0-1-1-1-2",
                        label: "New table 2",
                      },
                    ],
                  },
                ],
              },
              {
                key: "0-1-2",
                label: "tiger",
                type: "schema",
              },
              {
                key: "0-1-3",
                label: "tiger_data",
                type: "schema",
              },
              {
                key: "0-1-4",
                label: "test",
                type: "schema",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "PostgresSQL - production",
    type: "connections",
    nodes: [
      {
        key: "1-0",
        label: "Sandbox",
        type: "db",
        nodes: [
          {
            key: "1-1-0",
            label: "Schemas",
            type: "schemas",
            nodes: [
              {
                key: "1-1-1",
                label: "public",
                type: "schema",
                nodes: [
                  {
                    key: "1-1-1-0",
                    label: "Tables",
                    type: "tables",
                    nodes: [
                      {
                        key: "1-1-1-1-0",
                        label: "Layers",
                        type: "column",
                      },
                    ],
                  },
                ],
              },
              {
                key: "1-1-2",
                label: "tiger",
                type: "schema",
                nodes: [
                  {
                    key: "1-1-2-0",
                    label: "Tables",
                    type: "tables",
                    isDisabled: true,
                    nodes: [
                      {
                        key: "1-1-2-0-1",
                        label: "New table",
                        type: "column",
                      },
                    ],
                  },
                ],
              },
              {
                key: "1-1-3",
                label: "tiger_data",
                type: "schema",
              },
              {
                key: "1-1-4",
                label: "test",
                type: "schema",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "2",
    label: "PostgresSQL - staging",
    type: "connections",
    nodes: [],
  },
]
