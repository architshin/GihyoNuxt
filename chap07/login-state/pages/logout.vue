<script setup lang="ts">
import type {User} from "@/interfaces";

useState<User|null>("loginUser",
	(): User|null => {
		return null;
	}
);
useState<string>("loginToken",
	(): string => {
		return "";
	}
);
await navigateTo("/login");
</script>
