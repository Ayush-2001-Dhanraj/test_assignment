const USER_COUNTS = 200;

const BASEURL = "https://randomuser.me";
const ENDPOINT = `api/?results=${USER_COUNTS}`;
const GET_ENDPOINT = `${BASEURL}/${ENDPOINT}`;

const boxSection = document.getElementById("box_section") as HTMLElement;

interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface UserResult {
    picture: UserPicture;
}

interface ApiResponse {
    results: UserResult[];
}

const populateFaces = async (): Promise<void> => {
    try {
        const response = await fetch(GET_ENDPOINT);
        const data: ApiResponse = await response.json();

        data.results.forEach((user) => {
            const item = document.createElement("div");
            item.classList.add("box");

            item.style.backgroundImage = `url(${user.picture.large})`;
            item.style.backgroundSize = "cover";
            item.style.backgroundPosition = "center";

            boxSection?.appendChild(item);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

populateFaces();
