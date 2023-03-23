<template>
	<ul>
		<li>
			<NuxtLink v-bind:to="{name: 'spa'}">
				SPAレンダリング
			</NuxtLink>
		</li>
		<li>
			<NuxtLink v-bind:to="{name: 'universal'}">
				ユニバーサルレンダリング
			</NuxtLink>
		</li>
		<li>
			<NuxtLink v-bind:to="{name: 'ssg'}">
				静的サイトジェネレーション
			</NuxtLink>
		</li>
		<li>
			<NuxtLink v-bind:to="{name: 'isg'}">
				インクリメンタル静的ジェネレーション
			</NuxtLink>
		</li>
	</ul>
</template>
