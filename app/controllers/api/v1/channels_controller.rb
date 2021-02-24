class Api::V1::ChannelsController < ApplicationController
  def show
    @channels = Channel.all
    channels_log = @channels
    render json: channels_log
  end
end
