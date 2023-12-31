"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const updateCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        author: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        publicationDate: zod_1.z.string(),
        genre: zod_1.z.string(),
        status: zod_1.z.boolean(),
        comments: zod_1.z.string().optional(),
    }),
});
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        // cow: z.object({
        title: zod_1.z.string(),
        author: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        publicationDate: zod_1.z.string(),
        genre: zod_1.z.string(),
        status: zod_1.z.boolean(),
        comments: zod_1.z.string().optional(),
    }),
    // }),
});
exports.BookValidation = {
    updateCowZodSchema,
    createBookZodSchema,
};
