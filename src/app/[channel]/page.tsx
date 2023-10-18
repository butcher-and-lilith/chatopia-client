"use client";

import { Text } from "@chakra-ui/react";

interface ChannelPageProps {
  params: {
    channel: string;
  };
}

export default function ChannelPage({ params }: ChannelPageProps) {
  return <Text color="main.white">{params.channel} page</Text>;
}
