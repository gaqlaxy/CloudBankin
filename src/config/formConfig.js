export const formPages = [
    {
        pageName: "Borrower Company Info",
        fields: [
            {
                fieldId: "1",
                fieldName: "Property Name",
                type: "string",
                required: true
            },
            {
                fieldId: "2",
                fieldName: "Property Type",
                type: "dropdown",
                required: true,
                selectableValues: ["Own House", "Rented"]
            },
            {
                fieldId: "3",
                fieldName: "Number of Units",
                type: "dropdown",
                required: true,
                selectableValues: ["1", "2"]
            },
            {
                fieldId: "4",
                fieldName: "Property Address",
                type: "textarea",
                required: false
            },
            {
                fieldId: "5",
                fieldName: "File Attachment",
                type: "file",
                required: false
            }
        ]
    },
    {
        pageName: "Director Info",
        fields: [
            {
                fieldId: "6",
                fieldName: "Director Name",
                type: "string",
                required: true
            },
            {
                fieldId: "7",
                fieldName: "Position",
                type: "string",
                required: true
            }
        ]
    },
    {
        pageName: "Financial Info",
        fields: [
            {
                fieldId: "8",
                fieldName: "Annual Revenue",
                type: "string",
                required: true
            },
            {
                fieldId: "9",
                fieldName: "Net Income",
                type: "string",
                required: true
            }
        ]
    },
    {
        pageName: "Past Performance Details",
        fields: [
            {
                fieldId: "10",
                fieldName: "Previous Projects",
                type: "textarea",
                required: true
            }
        ]
    },
    {
        pageName: "Document Upload",
        fields: [
            {
                fieldId: "11",
                fieldName: "Supporting Documents",
                type: "file",
                required: true
            }
        ]
    }
];

// Form validation rules
export const validateField = (field, value) => {
    if (field.required && !value) {
        return `${field.fieldName} is required`;
    }
    return null;
};

// Form submission handler
export const handleFormSubmit = async (formData) => {
    try {
        // Add your API submission logic here
        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};