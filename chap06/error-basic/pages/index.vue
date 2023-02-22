<template>
	<ul>
		<li>
			<NuxtLink v-bind:to="{name: 'errorHandlerBasic'}">
				エラー表示実験ページ
			</NuxtLink>
		</li>
		<li>
			<NuxtLink v-bind:to="{name: 'errorHandlerNavigate'}">
				画面表示時のエラー
			</NuxtLink>
		</li>
	</ul>
</template>
