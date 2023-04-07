class MessagesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    messages = Message.all
    render json: messages, status: :ok
  end

  def create
    message = current_user.messages.create(message_params)
    if message.save
      render json: message, status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def message_params
      params.permit(:content)
    end
end
