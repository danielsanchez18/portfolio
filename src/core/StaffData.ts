import PhotoDaniel from "@/assets/photo-daniel.jpg";

export interface StaffMember {
    name: string;
    role: string;
    imageUrl: string;
}

export const staffMembers: StaffMember[] = [
    {
        name: "Daniel Sánchez",
        role: "Desarrollador Full Stack",
        imageUrl: PhotoDaniel.src,
    }
];